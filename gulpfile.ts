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
    'build:clean',
    'build:ts',
    'build:js',
    'build:img',
    'build:css',
    'build:html',
    'build:vendor',
    done
));

gulp.task('release', done => runSequence(
    'tslint',
    'release:clean',
    'release:ts',
    'release:js',
    'release:img',
    'release:css',
    'release:html',
    'release:vendor',
    'release:js.min',
    'release:css.min',
    'release:html.min',
    done
));

gulp.task('server', done => runSequence(
    'server.start',
    done
));
/*
 gulp.task('watch', done => runSequence(
 'watch.build',
 done
 ));
 */
gulp.task('dev', done => runSequence(
    'build',
    'server',
    'watch.build',
    done
));

gulp.task('prod', done => runSequence(
    'release',
    'watch.release',
    done
));

gulp.task('default', done => runSequence(
    'dev',
    done
));
