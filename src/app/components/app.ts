import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {asyncRoute} from 'app/tools/asyncRoute';
import {config} from 'app/config';

import {AppRouter} from 'app/directives/app-router';

@Component({
    selector: 'app',
    templateUrl: config.viewsPath + '/app.html',
    directives: [ROUTER_DIRECTIVES, AppRouter]
})

@RouteConfig([
    {
        path: '/',
        loader: asyncRoute(config.componentsPath + '/base/index', 'BaseComponent'),
        as: 'Home'
    }
])

export class AppComponent {}
