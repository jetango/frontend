let BASE_PATH = '<%= basePath %>';

export var config = new function() {
    this.basePath = BASE_PATH;

    this.appPath = this.basePath + '/app';

    this.componentsPath = this.appPath + '/components';

    this.viewsPath = this.appPath + '/views';

    this.useHashLocationStrategy = true;

    this.enableProductionMode = true;

    this.apiHost = 'http://127.0.0.1/api';
}();
