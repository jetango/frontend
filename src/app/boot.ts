import {bootstrap} from 'angular2/platform/browser';
import {provide, enableProdMode} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {Api} from 'app/resources/api';
import {Auth} from 'app/resources/auth';
import {AppComponent} from 'app/components/app';
import {config} from 'app/config';

if (config.enableProductionMode) {
  enableProdMode();
}

let providers = [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  Api,
  Auth
];

if (config.useHashLocationStrategy) {
  providers.push(
      provide(LocationStrategy, { useClass: HashLocationStrategy })
  );
}

bootstrap(AppComponent, providers);
