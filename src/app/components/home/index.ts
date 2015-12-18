import {Component} from 'angular2/angular2';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {EventCreateCmp} from 'app/components/events/create';
import {config} from 'app/config';

@Component({
    templateUrl: config.basePath + '/app/views/home/index.html',
    directives: [EventCreateCmp, ROUTER_DIRECTIVES]
})

export class HomeCmp {}
