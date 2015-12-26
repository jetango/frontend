import * as gulp from 'gulp';
import * as plumber from 'gulp-plumber';
import {join} from 'path';
import {config, resources} from '../../../config';

export = function task() {
    return () => {
        resources.map(function(src, key) {
            resources[key] = join(config.srcPath, src);
        });

        return gulp.src(resources, {base: 'src'})
            .pipe(plumber())
            .pipe(gulp.dest(config.releasePath));
    };
}
