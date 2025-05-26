#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { InfraStack } from '../lib/infra-stack';

const app = new cdk.App();
new InfraStack(app, 'MzkMnkDev', {
  env: { account: '796092240090', region: 'us-east-1' },
});