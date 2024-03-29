import * as gulp from 'gulp';
import * as plumber from 'gulp-plumber';
import {join} from 'path';
import {config} from '../../../config';

export = function task() {
    return () => {
        return gulp.src([
                join(config.srcPath, config.appVendorPath, '**/*')
            ])
            .pipe(plumber())
            .pipe(gulp.dest(join(config.buildPath, config.appVendorPath)));
    };
}
