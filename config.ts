export var config = {
  srcPath: 'src',
  buildPath: 'build',
  releasePath: 'release',

  appAssetsPath: 'assets',

  appVendorPath: 'vendor',

  template: {
    build: {
      basePath: '/build'
    },
    release: {
      basePath: '/release'
    }
  },

  server: {
    port: 9000,
    path: '/build',
    reloadPort: 4000
  }
};

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
];

export var cssMin = [

];

export var htmlMin = [

];
