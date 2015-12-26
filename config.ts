export var config = {
  srcPath: 'src',
  buildPath: 'build',
  releasePath: 'public',

  appAssetsPath: 'assets',

  appVendorPath: 'vendor',

  template: {
    build: {
      basePath: '/build',
      routeHash: true,
    },
    release: {
      basePath: '',
      routeHash: false,
    }
  },

  server: {
    port: 9000,
    path: '/build',
    reloadPort: 4000
  }
};

export var resources = [
  'nginx*.conf',
];

export var vendor = [
  {src: 'node_modules/systemjs/dist/**/*', dest: 'vendor/systemjs'},
  {src: 'node_modules/rxjs/bundles/**/*', dest: 'vendor/rxjs'},
  {src: 'node_modules/angular2/bundles/**/*', dest: 'vendor/angular2'},

  {src: 'node_modules/jquery/dist/**/*', dest: 'vendor/jquery'},

  {src: 'node_modules/bootstrap/dist/**/*', dest: 'vendor/bootstrap'},
  {src: 'node_modules/eonasdan-bootstrap-datetimepicker/build/**/*', dest: 'vendor/eonasdan-bootstrap-datetimepicker'},
  {src: 'node_modules/moment/**/*', dest: 'vendor/moment'},

  {src: 'node_modules/js-cookie/src/**/*', dest: 'vendor/js-cookie'},
];

export var jsMin = [
  'vendor/js-cookie/js.cookie.js',
  'vendor/angular2/angular2-polyfills.js',
  'vendor/systemjs/system.src.js',
  'vendor/rxjs/Rx.js',
  'vendor/angular2/angular2.dev.js',
  'vendor/angular2/router.dev.js',
  'vendor/angular2/http.dev.js',
];

export var cssMin = [

];

export var htmlMin = [

];
