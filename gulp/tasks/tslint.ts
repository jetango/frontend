import * as gulp from 'gulp';
import * as plumber from 'gulp-plumber';
import * as tslint from 'gulp-tslint';
import {join} from 'path';
import {config} from '../../config';

export = function task() {
    return () => {
        gulp.src([
                join(config.srcPath, '**/*.ts'),
                '!' + join(config.srcPath, '**/*.d.ts'),
            ])
            .pipe(plumber())
            .pipe(tslint())
            .pipe(tslint.report('verbose'));
    };
}
