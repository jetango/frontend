import * as gulp from 'gulp';
import * as plumber from 'gulp-plumber';
import {join} from 'path';
import {config} from '../../../config';

var htmlmin = require('gulp-htmlmin');

export = function task() {
    return () => {
        return gulp.src([
                join(config.srcPath, '**/*.htm'),
                join(config.srcPath, '**/*.html')
            ])
            .pipe(plumber())
            .pipe(htmlmin({collapseWhitespace: true}))
            .pipe(gulp.dest(config.releasePath));
    };
}
