import * as gulp from 'gulp';
import * as plumber from 'gulp-plumber';
import * as sourceMaps from 'gulp-sourcemaps';
import * as typescript from 'gulp-typescript';
import {join} from 'path';
import {config} from '../../config';

export = function task() {
    return () => {
        let result = gulp.src([
                join(config.srcPath, '**/*.ts'),

                '!' + join(config.srcPath, '**/*_spec.ts'),
                '!' + join(config.srcPath, '**/*.d.ts')
            ])
            .pipe(plumber())
            .pipe(sourceMaps.init())
            .pipe(typescript(typescript.createProject(join('tsconfig.json'), {
                typescript: require('typescript')
            })));

        result.js
            .pipe(sourceMaps.write('maps'))
            .pipe(gulp.dest(config.buildPath));
    };
}
