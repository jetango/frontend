import * as gulp from 'gulp';
import * as plumber from 'gulp-plumber';
import * as sourceMaps from 'gulp-sourcemaps';
import {join} from 'path';
import {config} from '../../config';

export = function task() {
    return () => {
        gulp.src([
                join(config.srcPath, config.appAssetsPath, '**/*.js')
            ])
            .pipe(plumber())
            .pipe(sourceMaps.init())
            .pipe(sourceMaps.write('maps'))
            .pipe(gulp.dest(join(config.buildPath, config.appAssetsPath)));
    };
}
