export var config = new function() {
    this.useHashLocationStrategy = parseInt('<%= routeHash %>');

    this.enableProductionMode = false;

    this.apiHost = '//127.0.0.1/api';
}();
