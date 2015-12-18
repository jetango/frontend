import * as gulp from 'gulp';
import * as plumber from 'gulp-plumber';
import {join} from 'path';
import {config} from '../../config';

var imageMin = require('gulp-imagemin');
var pngQuant = require('imagemin-pngquant');

export = function task() {
    return () => {
        gulp.src([
            join(config.srcPath, config.appAssetsPath, '**/*.png'),
            join(config.srcPath, config.appAssetsPath, '**/*.jpg'),
            join(config.srcPath, config.appAssetsPath, '**/*.svg')
        ])
        .pipe(plumber())
        .pipe(imageMin({
            progressive: true,
            interlaced: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngQuant()]
        }))
        .pipe(gulp.dest(join(config.buildPath, config.appAssetsPath)));
    };
}
