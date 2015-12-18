import * as tinyLrFn from 'tiny-lr';
import * as connectLiveReload from 'connect-livereload';
import * as express from 'express';
import * as open from 'open';

let tinyLr = tinyLrFn();

export function serverStart(port?, path?, reloadPort?) {
    let server = express();

    port = port || 9000;

    path = path || '/';

    reloadPort = reloadPort || 4000;

    tinyLr.listen(reloadPort);

    server.use('/', connectLiveReload({ port: reloadPort }), express.static(process.cwd()));

    server.listen(port, () => open('http://127.0.0.1:' + port + path));
}

export function notifyLiveReload(e) {
    let fileName = e.path;

    tinyLr.changed({
        body: { files: [fileName] }
    });
}
