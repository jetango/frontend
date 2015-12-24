import * as gulp from 'gulp';
import * as plumber from 'gulp-plumber';
import * as sourceMaps from 'gulp-sourcemaps';
import {join} from 'path';
import {config} from '../../../config';

var uglify = require('gulp-uglify');

export = function task() {
    return () => {
        return gulp.src([
                join(config.srcPath, '**/*.js'),

                //'!' + join(config.srcPath, config.appVendorPath, '**/*')
            ])
            .pipe(plumber())
            .pipe(sourceMaps.init())
            .pipe(uglify())
            .pipe(sourceMaps.write('maps'))
            .pipe(gulp.dest(config.releasePath));
    };
}
