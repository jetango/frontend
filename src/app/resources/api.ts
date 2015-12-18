import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {http_build_query} from 'app/tools/http_build_query';
import {config} from 'app/config';

@Injectable()

export class Api {
    host = config.apiHost;

    constructor(private http: Http) {}

    get(method, params, callable: Function) {
        return this.call('get', method, params, callable);
    }

    post(method, params, callable: Function) {
        return this.call('post', method, params, callable);
    }

    put(method, params, callable: Function) {
        return this.call('put', method, params, callable);
    }

    del(method, params, callable: Function) {
        return this.call('delete', method, params, callable);
    }

    getResource(method) {
        return this.host + method;
    }

    call(type, method, params, callable) {
        switch(type) {
            case 'get':
            case 'delete':
            case 'head':
                return this.fetchResponse(this.http[type](this.getResource(method)), callable);
            case 'post':
            case 'put':
            case 'patch':
                return this.fetchResponse(this.http[type](this.getResource(method), http_build_query(params), {
                    headers: {
                        'Content-Type': ['application/x-www-form-urlencoded; charset=UTF-8']
                    }
                }), callable);
        }
    }

    fetchResponse(observable: Observable, callable) {
        return observable.map(res => res.json()).subscribe((res) => callable && callable(res));
    }
}
