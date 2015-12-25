import * as gulp from 'gulp';
import * as plumber from 'gulp-plumber';
import * as sourceMaps from 'gulp-sourcemaps';
import {join, dirname} from 'path';
import {config, jsMin} from '../../../config';

var uglify = require('gulp-uglify');

export = function task() {
    return () => {
        jsMin.forEach((src) => {
            gulp.src([
                    join(config.srcPath, src),
                ])
                .pipe(plumber())
                .pipe(uglify())
                .pipe(gulp.dest(dirname(join(config.releasePath, src))));
        });
    };
}
