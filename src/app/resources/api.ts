import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {http_build_query} from 'app/tools/http_build_query';
import {config} from 'app/config';

@Injectable()

export class Api {
    host = config.apiHost;

    constructor(private http: Http) {}

    get(method, params) {
        return this.call('get', method, params);
    }

    post(method, params) {
        return this.call('post', method, params);
    }

    put(method, params) {
        return this.call('put', method, params);
    }

    del(method, params) {
        return this.call('delete', method, params);
    }

    getResource(method) {
        return this.host + method;
    }

    call(type, method, params) {
        switch(type) {
            case 'get':
            case 'delete':
            case 'head':
                return this.http[type](this.getResource(method));
            case 'post':
            case 'put':
            case 'patch':
                return this.http[type](this.getResource(method), http_build_query(params), {
                    headers: {
                        'Content-Type': ['application/x-www-form-urlencoded; charset=UTF-8']
                    }
                });
        }
    }
}
