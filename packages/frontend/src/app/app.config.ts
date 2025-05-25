import { type ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideIcons } from '@ng-icons/core';
import {
  tablerFileCode,
  tablerBrandJavascript,
  tablerBrandTypescript,
  tablerBrandAngular,
  tablerBrandReact,
  tablerBrandVue,
  tablerBrandTailwind,
  tablerBrandSass,
  tablerDeviceMobile,
  tablerBrandNodejs,
  tablerServer,
  tablerServer2,
  tablerBrandMongodb,
  tablerDatabase,
  tablerApi,
  tablerBrandGraphql,
  tablerBrandGit,
  tablerBrandDocker,
  tablerGitBranch,
  tablerTestPipe,
  tablerBug,
  tablerBrandFigma,
  tablerUsers,
  tablerBrandNextjs,
  tablerCampfire,
} from '@ng-icons/tabler-icons';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideIcons({
      tablerFileCode,
      tablerBrandJavascript,
      tablerBrandTypescript,
      tablerBrandAngular,
      tablerBrandReact,
      tablerBrandVue,
      tablerBrandTailwind,
      tablerBrandSass,
      tablerDeviceMobile,
      tablerBrandNodejs,
      tablerServer,
      tablerServer2,
      tablerBrandMongodb,
      tablerDatabase,
      tablerApi,
      tablerBrandGraphql,
      tablerBrandGit,
      tablerBrandDocker,
      tablerGitBranch,
      tablerTestPipe,
      tablerBug,
      tablerBrandFigma,
      tablerUsers,
      tablerBrandNextjs,
      tablerCampfire
    })
  ]
};
