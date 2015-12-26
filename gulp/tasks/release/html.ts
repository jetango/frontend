import * as gulp from 'gulp';
import * as plumber from 'gulp-plumber';
import {join} from 'path';
import {config} from '../../../config';

var minifyHtml = require('gulp-htmlmin');

var minifyHTML = require('gulp-minify-html');

var template = require('gulp-template');

export = function task() {
    return () => {
        return gulp.src([
                join(config.srcPath, '**/*.htm'),
                join(config.srcPath, '**/*.html'),

                '!' + join(config.srcPath, config.appVendorPath, '**/*')
            ])
            .pipe(plumber())
            .pipe(template(config.template.release))
            /*
            .pipe(minifyHTML({
                empty: true,
                quotes: true,
                loose: true
            }))
            */
            .pipe(minifyHtml({
                collapseWhitespace: true,
                conservativeCollapse: true,
                //preserveLineBreaks: true,
                collapseBooleanAttributes: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                caseSensitive: true,
                ignoreCustomFragments: [
                    /\s\*[a-zA-Z0-9-\.]+/,
                    /\s\[[a-zA-Z0-9-\.]+\]/,
                    /\s\([a-zA-Z0-9-\.]+\)/,
                    /\s\[\([a-zA-Z0-9-\.]+\)\]/,
                    /\s\#[a-zA-Z0-9-\.]+/
                ]
            }))
            .pipe(gulp.dest(config.releasePath));
    };
}
