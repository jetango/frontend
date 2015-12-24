import {Injectable} from 'angular2/core';
import {Router} from 'angular2/router';

@Injectable()

export class Auth {
    isGuest = true;

    isMember = false;

    constructor(private router: Router) {
        this.refresh();
    }

    login() {
        Cookies.set('login', 1);

        var $this = this;

        $this.refresh();
    }

    logout() {
        Cookies.remove('login');

        var $this = this;

        $this.refresh();
    }

    refresh() {
        if (Cookies.get('login') == 1) {
            this.isGuest = false;
            this.isMember = true;
        } else {
            this.isGuest = true;
            this.isMember = false;
        }
    }
}