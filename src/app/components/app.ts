import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {asyncRoute} from 'app/tools/asyncRoute';

import {AppRouter} from 'app/directives/app-router';

@Component({
    selector: 'app',
    templateUrl: 'app/views/app.html',
    directives: [ROUTER_DIRECTIVES, AppRouter]
})

@RouteConfig([
    {
        path: '/',
        loader: asyncRoute('app/components/base/index', 'BaseComponent'),
        as: 'Home'
    }
])

export class AppComponent {}
