import * as gulp from 'gulp';
import {readdirSync, existsSync, lstatSync} from 'fs';
import {join} from 'path';

export function loadTasksFromPath(path, prefix = '') {
    if (!existsSync(path)) {
        return false;
    }

    readdirSync(path).forEach(function(file) {
        let taskFile = join(path, file);

        if (lstatSync(taskFile).isDirectory()) {
            loadTasksFromPath(taskFile, prefix + file + ':');
        }

        if (lstatSync(taskFile).isFile() && file.match(/\.ts$/)) {
            let taskName = file.replace(/\.ts$/, '');

            gulp.task(prefix + taskName, require(join('..', path, taskName))());
        }
    });
}
