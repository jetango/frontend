# Boilerplate for angular2+ts+html+js+css apps

The start is here.

# Instalation

1. Clone the project `git clone https://github.com/greg-md/frontend.git frontend`
2. Install node modules `npm install`
3. Run project `npm start`

# Application configuration

1. Configure dependencies in `package.json`
2. Configure settings in `config.ts`
3. Install vendor files `gulp vendor.install`

# Angular2 configuration

2. Configure settings in `src/app/config.ts`

# Gulp tasks

1. `gulp` - Run `build`, `server` and `watch` tasks;
2. `gulp tslint` - Check typescript files for syntax errors;
3. `gulp watch` - Watch for files changes.

### Vendor
1. `gulp vendor` - Run all next tasks;
2. `gulp vendor.clean` - Delete vendor files;
3. `gulp vendor.update` - Update vendor files.

### Build
1. `gulp build` - Run `tslint` and all next tasks;
2. `gulp build.clean` - Delete build folder;
3. `gulp build.ts` - Build typescript to javascript;
4. `gulp build.js` - Build javascript;
5. `gulp build.img` - Build images;
6. `gulp build.css` - Build css;
7. `gulp build.html` - Build html;
8. `gulp build.vendor` - Build vendor.


### Server

1. `gulp server` - Run all next tasks;
2. `gulp server.start` - Start web server.
