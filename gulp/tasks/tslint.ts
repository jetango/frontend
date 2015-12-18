import * as gulp from 'gulp';
import * as tslint from 'gulp-tslint';
import {join} from 'path';
import {config} from '../../config';

export = function task() {
    return () => {
        gulp.src([
                join(config.srcPath, '**/*.ts'),
                '!' + join(config.srcPath, '**/*.d.ts'),
            ])
            .pipe(tslint())
            .pipe(tslint.report('verbose'));
    };
}
