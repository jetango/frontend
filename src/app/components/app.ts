import {Component} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {asyncRoute} from 'app/tools/asyncRoute';
import {config} from 'app/config';

@Component({
    selector: 'app',
    templateUrl: config.basePath + '/app/views/app.html',
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    {
        path: '/',
        loader: asyncRoute(config.basePath + '/app/components/home/index', 'HomeCmp'),
        as: 'Home'
    }
])

export class AppCmp {}
