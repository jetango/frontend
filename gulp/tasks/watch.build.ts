import watch = require('gulp-watch');
import * as runSequence from 'run-sequence';
import {join} from 'path';
import {config} from '../../config';
import {notifyLiveReload} from '../utils/server';

export = function task() {
    return () => {
        watch(join(config.srcPath, '**/*.ts'), e => runSequence('tslint', 'build.ts', () => notifyLiveReload(e)));

        watch(join(config.srcPath, config.appAssetsPath, '**/*.js'), e => runSequence('build.js', () => notifyLiveReload(e)));

        watch(join(config.srcPath, config.appAssetsPath, '**/*.png'), e => runSequence('build.img', () => notifyLiveReload(e)));
        watch(join(config.srcPath, config.appAssetsPath, '**/*.jpg'), e => runSequence('build.img', () => notifyLiveReload(e)));
        watch(join(config.srcPath, config.appAssetsPath, '**/*.svg'), e => runSequence('build.img', () => notifyLiveReload(e)));

        watch(join(config.srcPath, config.appAssetsPath, '**/*.css'), e => runSequence('build.css', () => notifyLiveReload(e)));

        watch(join(config.srcPath, '**/*.htm'), e => runSequence('build.html', () => notifyLiveReload(e)));
        watch(join(config.srcPath, '**/*.html'), e => runSequence('build.html', () => notifyLiveReload(e)));

        watch(join(config.srcPath, config.appVendorPath, '**'), e => runSequence('build.vendor', () => notifyLiveReload(e)));
    };
}
