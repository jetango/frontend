import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {config} from 'app/config';

@Component({
    templateUrl: config.basePath + '/app/views/home/index.html',
    directives: [ROUTER_DIRECTIVES]
})

export class HomeCmp {}
