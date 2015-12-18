import * as gulp from 'gulp';
import * as runSequence from 'run-sequence';
import {loadTasksFromPath} from './gulp/utils';

loadTasksFromPath('gulp/tasks');

gulp.task('vendor', done => runSequence(
    'vendor.clean',
    'vendor.update',
    done
));

gulp.task('build', done => runSequence(
    'tslint',
    'build.clean',
    'build.ts',
    'build.js',
    'build.img',
    'build.css',
    'build.html',
    'build.vendor',
    done
));

gulp.task('server', done => runSequence(
    'server.start',
    done
));

gulp.task('default', done => runSequence(
    'build',
    'server',
    'watch',
    done
));
