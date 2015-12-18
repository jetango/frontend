import {serverStart} from '../utils/server';
import {config} from '../../config';

export = function task() {
    return () => {
        serverStart(config.server.port, config.server.path, config.server.reloadPort);
    };
}
