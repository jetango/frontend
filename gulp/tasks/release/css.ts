import * as gulp from 'gulp';
import * as plumber from 'gulp-plumber';
import * as sourceMaps from 'gulp-sourcemaps';
import {join} from 'path';
import {config} from '../../../config';

var minifyCss = require('gulp-minify-css');

export = function task() {
    return () => {
        return gulp.src([
                join(config.srcPath, '**/*.css'),

                '!' + join(config.srcPath, config.appVendorPath, '**/*')
            ])
            .pipe(plumber())
            .pipe(sourceMaps.init())
            .pipe(minifyCss())
            .pipe(sourceMaps.write('maps'))
            .pipe(gulp.dest(config.releasePath));
    };
}
