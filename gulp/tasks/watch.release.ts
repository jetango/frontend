import watch = require('gulp-watch');
import * as runSequence from 'run-sequence';
import {join} from 'path';
import {config} from '../../config';

export = function task() {
    return () => {
        watch(join(config.srcPath, '**/*.ts'), e => runSequence('tslint', 'release:ts'));

        watch(join(config.srcPath, '**/*.js'), e => runSequence('release:js'));

        watch(join(config.srcPath, '**/*.png'), e => runSequence('release:img'));
        watch(join(config.srcPath, '**/*.jpg'), e => runSequence('release:img'));
        watch(join(config.srcPath, '**/*.svg'), e => runSequence('release:img'));

        watch(join(config.srcPath, '**/*.css'), e => runSequence('release:css'));

        watch(join(config.srcPath, '**/*.htm'), e => runSequence('release:html'));
        watch(join(config.srcPath, '**/*.html'), e => runSequence('release:html'));

        watch(join(config.srcPath, config.appVendorPath, '**'), e => runSequence('release:vendor'));
    };
}
