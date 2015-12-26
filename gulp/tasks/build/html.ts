import * as gulp from 'gulp';
import * as plumber from 'gulp-plumber';
import {join} from 'path';
import {config} from '../../../config';

var template = require('gulp-template');

export = function task() {
    return () => {
        return gulp.src([
                join(config.srcPath, '**/*.htm'),
                join(config.srcPath, '**/*.html'),

                '!' + join(config.srcPath, config.appVendorPath, '**/*')
            ])
            .pipe(plumber())
            .pipe(template(config.template.build))
            .pipe(gulp.dest(config.buildPath));
    };
}
