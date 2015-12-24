import * as gulp from 'gulp';
import * as plumber from 'gulp-plumber';
import {join} from 'path';
import {config} from '../../../config';

var imageMin = require('gulp-imagemin');
var pngQuant = require('imagemin-pngquant');

export = function task() {
    return () => {
        return gulp.src([
            join(config.srcPath, '**/*.png'),
            join(config.srcPath, '**/*.jpg'),
            join(config.srcPath, '**/*.svg'),
            '!' + join(config.srcPath, config.appVendorPath, '**/*')
        ])
        .pipe(plumber())
        .pipe(imageMin({
            progressive: true,
            interlaced: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngQuant()]
        }))
        .pipe(gulp.dest(config.releasePath));
    };
}
