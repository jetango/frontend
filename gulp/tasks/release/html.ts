import * as gulp from 'gulp';
import * as plumber from 'gulp-plumber';
import {join} from 'path';
import {config} from '../../../config';

var minifyHtml = require('gulp-htmlmin');

export = function task() {
    return () => {
        return gulp.src([
                join(config.srcPath, '**/*.htm'),
                join(config.srcPath, '**/*.html'),

                '!' + join(config.srcPath, config.appVendorPath, '**/*')
            ])
            .pipe(plumber())
            .pipe(minifyHtml({collapseWhitespace: true}))
            .pipe(gulp.dest(config.releasePath));
    };
}
