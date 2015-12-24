import * as gulp from 'gulp';
import * as plumber from 'gulp-plumber';
import {join} from 'path';
import {config} from '../../../config';

export = function task() {
    return () => {
        return gulp.src([
                join(config.srcPath, '**/*.htm'),
                join(config.srcPath, '**/*.html')
            ])
            .pipe(plumber())
            .pipe(gulp.dest(config.releasePath));
    };
}
