import * as gulp from 'gulp';
import * as plumber from 'gulp-plumber';
import * as sourceMaps from 'gulp-sourcemaps';
import {join, dirname} from 'path';
import {config, cssMin} from '../../../config';

var minifyCss = require('gulp-minify-css');

export = function task() {
    return () => {
        cssMin.forEach((src) => {
            gulp.src([
                    join(config.srcPath, src),
                ])
                .pipe(plumber())
                .pipe(minifyCss())
                .pipe(gulp.dest(dirname(join(config.releasePath, src))));
        });
    };
}
