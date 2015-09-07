var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var util = require('gulp-util');
var del = require('del');
var connect = require('gulp-connect');
var opn = require('opn');

var settings = require('./settings.json');

function toArray(obj)
{
    var item = obj;

    if (!Array.isArray(item)) {
        item = [item];
    }

    return item;
}

settings.html = toArray(settings.html);
settings.css = toArray(settings.css);
settings.js = toArray(settings.js);
settings.img = toArray(settings.img);
settings.libs = toArray(settings.libs);

gulp.task('build:html', function() {
    settings.html.forEach(function(item) {
        gulp.src(item.src)
            .pipe(gulp.dest(item.build))
            .pipe(connect.reload());
    });
});

gulp.task('build:css', function() {
    settings.css.forEach(function(item) {
        gulp.src(item.src)
            .pipe(minifyCss().on('error', function(err) {
                util.log(util.colors.red('Minify css error.'), err.message);

                this.emit('end');
            }))
            .pipe(gulp.dest(item.build))
            .pipe(connect.reload());
    });
});

gulp.task('build:js', function() {
    settings.js.forEach(function(item) {
        gulp.src(item.src)
            .pipe(uglify().on('error', function(err) {
                util.log(util.colors.red('Uglify js error.'), err.message);

                this.emit('end');
            }))
            .pipe(gulp.dest(item.build))
            .pipe(connect.reload());
    });
});

gulp.task('build:img', function() {
    settings.img.forEach(function(item) {
        gulp.src(item.src)
            .pipe(imagemin({
                progressive: true,
                svgoPlugins: [{removeViewBox: false}],
                use: [pngquant()]
            }).on('error', function(err) {
                 util.log(util.colors.red('Imagemin error.'), err.message);

                 this.emit('end');
            }))
            .pipe(gulp.dest(item.build))
            .pipe(connect.reload());
    });
});

gulp.task('build:libs', function() {
    settings.libs.forEach(function(item) {
        gulp.src(item.src)
            .pipe(gulp.dest(item.build))
            .pipe(connect.reload());
    });
});

gulp.task('build:clean', function (done) {
    del(['.tmp'], done);
    del(settings.clean.build, done);
});

// Rerun the task when a file changes
gulp.task('build:watch', function() {
    settings.html.forEach(function(item) {
        gulp.watch(item.src, ['build:html']);
    });

    settings.css.forEach(function(item) {
        gulp.watch(item.src, ['build:css']);
    });

    settings.js.forEach(function(item) {
        gulp.watch(item.src, ['build:js']);
    });

    settings.img.forEach(function(item) {
        gulp.watch(item.src, ['build:img']);
    });

    settings.img.forEach(function(item) {
        gulp.watch(item.src, ['build:libs']);
    });
});

gulp.task('build', [
    'build:html',
    'build:css',
    'build:js',
    'build:img',
    'build:libs'
]);

gulp.task('release:css', function() {
    settings.css.forEach(function(item) {
        gulp.src(item.src)
            .pipe(minifyCss())
            .pipe(gulp.dest(item.release))
            .pipe(connect.reload());
    });
});

gulp.task('release:js', function() {
    settings.js.forEach(function(item) {
        gulp.src(item.src)
            .pipe(uglify().on('error', function(err) {
                util.log(util.colors.red('Uglify js error.'), err.message);

                this.emit('end');
            }))
            .pipe(gulp.dest(item.release))
            .pipe(connect.reload());
    });
});

gulp.task('release:img', function() {
    settings.img.forEach(function(item) {
        gulp.src(item.src)
            .pipe(imagemin({
                progressive: true,
                svgoPlugins: [{removeViewBox: false}],
                use: [pngquant()]
            }).on('error', function(err) {
                 util.log(util.colors.red('Imagemin error.'), err.message);

                 this.emit('end');
            }))
            .pipe(gulp.dest(item.release))
            .pipe(connect.reload());
    });
});

gulp.task('release:libs', function() {
    settings.libs.forEach(function(item) {
        gulp.src(item.src)
            .pipe(gulp.dest(item.release))
            .pipe(connect.reload());
    });
});

gulp.task('release:clean', function (done) {
    del(['.tmp'], done);
    del(settings.clean.release, done);
});

// Rerun the task when a file changes
gulp.task('release:watch', function() {
    settings.css.forEach(function(item) {
        gulp.watch(item.src, ['release:css']);
    });

    settings.js.forEach(function(item) {
        gulp.watch(item.src, ['release:js']);
    });

    settings.img.forEach(function(item) {
        gulp.watch(item.src, ['release:img']);
    });

    settings.img.forEach(function(item) {
        gulp.watch(item.src, ['release:libs']);
    });
});

gulp.task('release', [
    'release:css',
    'release:js',
    'release:img',
    'release:libs'
]);

gulp.task('webserver', function() {
    connect.server({
        host: settings.server.host,
        port: settings.server.port,
        livereload: true
    });
});

gulp.task('openbrowser', ['webserver'], function() {
    opn('http://' + settings.server.host + ':' + settings.server.port + '/build');
});

gulp.task('clean', ['build:clean', 'release:clean']);

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['build', 'webserver', 'build:watch', 'openbrowser']);
