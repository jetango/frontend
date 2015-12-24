import * as gulp from 'gulp';
import * as del from 'del';
import * as async from 'async';
import {join} from 'path';
import {config, vendor} from '../../config';

export = function task() {
    return () => {
        var functions = [];

        vendor.forEach(function(lib) {
            functions.push(function() {
                del(join(config.srcPath, lib.dest));
            });
        });

        async.parallel(functions);
    };
}
