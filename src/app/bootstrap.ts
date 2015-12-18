import {bootstrap, provide} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS, APP_BASE_HREF, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {Api} from 'app/resources/api';
import {AppCmp} from 'app/components/app';
import {config} from 'app/config';

let providers = [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  provide(APP_BASE_HREF, { useValue: location.pathname }),
  Api
];

if (config.useHashLocationStrategy) {
  providers.push(
      provide(LocationStrategy, { useClass: HashLocationStrategy })
  );
}

bootstrap(AppCmp, providers);
