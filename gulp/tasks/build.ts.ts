import * as gulp from 'gulp';
import * as plumber from 'gulp-plumber';
import * as sourceMaps from 'gulp-sourcemaps';
import * as typescript from 'gulp-typescript';
import {join} from 'path';
import {config} from '../../config';

var template = require('gulp-template');

export = function task() {
    return () => {
        let allTs = gulp.src([
                join(config.srcPath, '**/*.ts'),

                '!' + join(config.srcPath, 'app/config.ts'),
                '!' + join(config.srcPath, '**/*_spec.ts'),
                '!' + join(config.srcPath, '**/*.d.ts')
            ])
            .pipe(plumber())
            .pipe(sourceMaps.init())
            .pipe(typescript(typescript.createProject(join('tsconfig.json'), {
                typescript: require('typescript')
            })));

        allTs.js
            .pipe(sourceMaps.write('maps'))
            .pipe(gulp.dest(config.buildPath));

        let confTs = gulp.src([
                join(config.srcPath, 'app/config.ts'),
            ])
            .pipe(template(config.template.build))
            .pipe(plumber())
            .pipe(sourceMaps.init())
            .pipe(typescript(typescript.createProject(join('tsconfig.json'), {
                typescript: require('typescript')
            })));

        confTs.js
            .pipe(sourceMaps.write('maps'))
            .pipe(gulp.dest(join(config.buildPath, 'app')));

        return confTs;
    };
}
