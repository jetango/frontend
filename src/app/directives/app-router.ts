import {Directive, Attribute, ElementRef, DynamicComponentLoader} from 'angular2/core';
import {Router, RouterOutlet} from 'angular2/router';
import {Auth} from 'app/resources/auth';

import {PromiseWrapper} from 'angular2/src/facade/async';

@Directive({
    selector: 'app-router'
})

export class AppRouter extends RouterOutlet {

    // I have had to rewrite dependency injection.
    constructor(
        _elementRef: ElementRef,
        _loader: DynamicComponentLoader,
        private _parentRouter: Router,
        @Attribute('name') nameAttr: string,
        private _auth: Auth) {
        super(_elementRef, _loader, _parentRouter, nameAttr);
    }

    // Check acl access before it will activate the component.
    activate(nextInstruction) {
        //console.log('activate', nextInstruction);

        if (!this.aclExec(nextInstruction)) {
            return;
        }

        return super.activate(nextInstruction);
    }

    aclExec(instruction, navigate = true) {
        // Bug: Very strange bug. Steps to reproduce:
        // 1. Log in. It will redirect me to another page.
        // 2. Click a link to the same page. Will call the reuse function.
        // 3. Logout. The _auth object is gone. :))
        if (!this._auth) {
            //console.log('lol, where is the _auth object?', instruction, this);

            // Try to redirect somewhere and the _auth object will appear back. :))
            this._parentRouter.navigate(['Home']);

            return;
        }

        if (instruction.routeData.get('memberOnly') && this._auth.isGuest) {
            if (navigate) {
                // Temporary use direct routes because RouteData is always empty
                this._parentRouter.navigate(['Login']);
            } else {
                super.activate(instruction);
            }

            return false;
        }

        if (instruction.routeData.get('guestOnly') && this._auth.isMember) {
            if (navigate) {
                // Temporary use direct routes because RouteData is always empty
                this._parentRouter.navigate(['Home']);
            } else {
                super.activate(instruction);
            }

            return false;
        }

        return true;
    }

    reuse(nextInstruction) {
        // Bug: Why when i want to go back in the browser, it calls the reuse function twice?
        //console.log('reuse', nextInstruction, this._componentRef);

        // Bug: Fix for the browser back button. The component reference is gone somewhere.
        if (!this._componentRef) {
            //console.log('aclExec');

            if (this.aclExec(nextInstruction, false)) {
                super.activate(nextInstruction);
            } else {
                this.aclExec(nextInstruction);
            }

            return PromiseWrapper.resolve(true);
        }

        return super.reuse(nextInstruction);
    }
}
