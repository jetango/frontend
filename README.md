# Boilerplate for angular2+ts+html+js+css apps

The start is here.

# Instalation

1. Clone the project `git clone https://github.com/greg-md/frontend.git frontend`
2. Install node modules `npm install`
3. Run project `npm start`

# Application configuration

1. Configure dependencies in `package.json`
2. Configure settings in `config.ts`
3. Install vendor files `gulp vendor`

# Angular2 configuration

2. Configure settings in `src/app/config.ts`

# Gulp tasks

1. `gulp` - Run `dev` task;
2. `gulp dev` - Run `build`, `server` and `watch.build` tasks;
2. `gulp prod` - Run `release` and `watch.release` tasks;
2. `gulp tslint` - Check typescript files for syntax errors;

### Vendor
1. `gulp vendor` - Run all next tasks;
2. `gulp vendor.clean` - Delete vendor files;
3. `gulp vendor.update` - Update vendor files.

### Build
1. `gulp build` - Run `tslint` and all next tasks;
2. `gulp build:clean` - Delete build folder;
3. `gulp build:ts` - Build typescript to javascript;
4. `gulp build:js` - Build javascript;
5. `gulp build:img` - Build images;
6. `gulp build:css` - Build css;
7. `gulp build:html` - Build html;
8. `gulp build:vendor` - Build vendor.
8. `gulp build:resources` - Build resources.

### Release
1. `gulp release` - Run `tslint` and all next tasks;
2. `gulp release:clean` - Delete release folder;
3. `gulp release:ts` - Release typescript to javascript;
4. `gulp release:js` - Release javascript;
5. `gulp release:img` - Release images;
6. `gulp release:css` - Release css;
7. `gulp release:html` - Release html;
8. `gulp release:vendor` - Release vendor.
8. `gulp release:resources` - Release resources.
8. `gulp release:js.min` - Release and uglify custom js resources.
8. `gulp release:css.min` - Release and minify custom css resources.
8. `gulp release:html.min` - Release and minify custom html resources.

### Server
1. `gulp server` - Run all next tasks;
2. `gulp server.start` - Start web server.

### Watcher
2. `gulp watch.build` - Watch for build files changes.
2. `gulp watch.release` - Watch for release files changes.
