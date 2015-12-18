import * as gulp from 'gulp';
import * as del from 'del';
import {join} from 'path';
import {config, vendor} from '../../config';

export = function task() {
    return () => {
        vendor.forEach(function(lib) {
            del(join(config.srcPath, lib.dest));
        });
    };
}
