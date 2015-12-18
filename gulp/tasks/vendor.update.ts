import * as gulp from 'gulp';
import * as del from 'del';
import {join} from 'path';
import {config, vendor} from '../../config';

export = function task() {
    return () => {
        vendor.forEach(function(lib) {
            gulp.src([
                    lib.src,
                    '!' + join(lib.src, '**/*_spec.ts'),
                    '!' + join(lib.src, '**/*.d.ts')
                ])
                .pipe(gulp.dest(join(config.srcPath, lib.dest)));
        });
    };
}
