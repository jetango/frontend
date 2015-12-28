import {Injectable} from 'angular2/core';

@Injectable()

export class Auth {
    login() {
        Cookies.set('login', 1);
    }

    logout() {
        Cookies.remove('login');
    }

    get isMember() {
        return Cookies.get('login') == 1;
    }

    get isGuest() {
        return Cookies.get('login') != 1;
    }
}