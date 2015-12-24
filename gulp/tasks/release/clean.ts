import * as del from 'del';
import {config} from '../../../config';

export = function task() {
    return () => {
        del(config.releasePath);
    };
}
