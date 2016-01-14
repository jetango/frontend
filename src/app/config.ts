let BASE_PATH = '<%= basePath %>';

let ROUTE_HASH = parseInt('<%= routeHash %>');

export var config = new function() {
    this.basePath = BASE_PATH;

    this.appPath = this.basePath + '/app';

    this.componentsPath = this.appPath + '/components';

    this.viewsPath = this.appPath + '/views';

    this.useHashLocationStrategy = ROUTE_HASH;

    this.enableProductionMode = false;

    this.apiHost = '//127.0.0.1/api';
}();
