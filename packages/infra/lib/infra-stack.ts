import * as cdk from 'aws-cdk-lib';
import {
  aws_s3 as s3,
  aws_cloudfront as cloudfront,
  aws_cloudfront_origins as cfOrigins,
  aws_s3_deployment as s3Deployment,
  aws_certificatemanager as acm
} from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class InfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // S3バケットの作成
    const websiteBucket = new s3.Bucket(this, 'DevWebsiteBucket', {
      bucketName: `dev-mzk-mnk-website-bucket`.toLowerCase(),
      websiteIndexDocument: 'index.html',
      websiteErrorDocument: 'index.html',
      publicReadAccess: false,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });

    // 既存のACM証明書を参照
    const certificate = acm.Certificate.fromCertificateArn(
      this,
      'Certificate',
      'arn:aws:acm:us-east-1:796092240090:certificate/b20d4659-232b-4707-b760-b48965ea86bb',
    );

    // CloudFrontディストリビューションの作成
    const distribution = new cloudfront.Distribution(this, 'DevWebsiteDistribution', {
      defaultRootObject: 'index.html',
      domainNames: ['profile.mzkmnk.net'],
      certificate: certificate,
      defaultBehavior: {
        origin: cfOrigins.S3BucketOrigin.withOriginAccessControl(websiteBucket),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        allowedMethods: cloudfront.AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
        cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED,
      },
      errorResponses: [
        {
          httpStatus: 403,
          responseHttpStatus: 200,
          responsePagePath: '/index.html',
        },
        {
          httpStatus: 404,
          responseHttpStatus: 200,
          responsePagePath: '/index.html',
        },
      ],
    });

    new s3Deployment.BucketDeployment(this, "DevDeployWebsite", {
      sources: [s3Deployment.Source.asset('../frontend/dist/frontend/browser')],
      destinationBucket: websiteBucket,
      distributionPaths: ['/*'],
      distribution,
    })

    new cdk.CfnOutput(this, 'Hosting URL', {
      value: 'https://' + distribution.distributionDomainName
    });

    new cdk.CfnOutput(this, 'Custom Domain URL', {
      value: 'https://mzkmnk.net'
    });
  }
}
