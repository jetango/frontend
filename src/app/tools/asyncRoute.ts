export function asyncRoute(path, name) {
    return () => {
        return System.import(path).then(m => {
            return m[name];
        });
    };
}
