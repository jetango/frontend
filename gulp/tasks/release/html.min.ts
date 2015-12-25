import * as gulp from 'gulp';
import * as plumber from 'gulp-plumber';
import {join, dirname} from 'path';
import {config, htmlMin} from '../../../config';

var minifyHtml = require('gulp-htmlmin');

export = function task() {
    return () => {
        htmlMin.forEach((src) => {
            gulp.src([
                    join(config.srcPath, src),
                ])
                .pipe(plumber())
                .pipe(minifyHtml({collapseWhitespace: true}))
                .pipe(gulp.dest(dirname(join(config.releasePath, src))));
        });
    };
}
