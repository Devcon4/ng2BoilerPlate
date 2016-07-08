import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode, provide } from '@angular/core';
import {LocationStrategy, HashLocationStrategy, PathLocationStrategy, PlatformLocation} from "@angular/common";
import { AppComponent, environment } from './app/';

import {UIRouterConfig, UIROUTER_PROVIDERS, UIView} from 'ui-router-ng2';
import {MyUIRouterConfig} from "./app/router.config";

if (environment.production) {
  enableProdMode();
}

bootstrap(UIView,[
  provide(LocationStrategy, { useClass: PathLocationStrategy }),
  ...UIROUTER_PROVIDERS, provide(UIRouterConfig, {useClass: MyUIRouterConfig})
]);

