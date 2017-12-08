'use strict';

const gulp = require('gulp');

const gulpWebpack = require('gulp-webpack');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const imagemin = require('gulp-imagemin');
const pug  = require('gulp-pug');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const groupMediaQueries = require('gulp-group-css-media-queries');//ищет одинаковые медиа условия и группирует их
const cleanCSS = require('gulp-cleancss');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const cssunit = require('gulp-css-unit');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const replace = require('gulp-replace');
const del = require('del');
const plumber = require('gulp-plumber');
const browserSync = require('browser-sync').create();

const paths =  {
  src: './src/',              // paths.src
  build: './build/',          // paths.build
    templates:{
      pages:'src/templates/pages/*.pug',
      src:'src/templates/**/*.pug',
      dest:'./build'
    },
    images:{
        src:'src/images/**/*.*',
        dest:'./build/images/'
    },
    fonts:{
      src:'src/fonts/**/*.*',
        dest:'./build/fonts/'
    },
    scripts:{
      src:'src/js/**/*.js',
        dest:'./build/js/'
    }
};

//pug
function templates() {
    return gulp.src(paths.templates.pages)
        .pipe(pug({pretty:true}))
        .pipe(gulp.dest(paths.build));
}

//scss
function styles() {
  return gulp.src(paths.src + 'scss/style.scss')
    .pipe(plumber())// что бы если будет ошибка компиляции то процесс слежения не остонавливался
    .pipe(sourcemaps.init())// обращение к карте кода
    .pipe(sassGlob())
    .pipe(sass()) // { outputStyle: 'compressed' }
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(cssunit({type: 'px-to-rem',rootSize: 16}))
    .pipe(groupMediaQueries())//ищет одинаковые медиа условия и группирует их
    .pipe(cleanCSS())//минификация
    .pipe(rename({ suffix: ".min" }))//переименнование файла
    .pipe(sourcemaps.write('/'))// запись карты кода
    .pipe(gulp.dest(paths.build + 'css/'))
}

// сжимает перекладывает  images
function images() {
    return gulp.src(paths.images.src)
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.jpegtran({progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
        .pipe(gulp.dest(paths.images.dest));
};

//fonts
function fonts() {
    return gulp.src(paths.fonts.src)
        .pipe(gulp.dest(paths.fonts.dest));
}

// webpack
function scripts() {
    return gulp.src('src/js/main.js')
        .pipe(gulpWebpack(webpackConfig, webpack))
        .pipe(gulp.dest(paths.scripts.dest));
}

//html
function htmls() {
  return gulp.src(paths.src + '*.html')
    .pipe(plumber())
    .pipe(replace(/\n\s*<!--DEV[\s\S]+?-->/gm, ''))
    .pipe(gulp.dest(paths.build));
}


//clean
function clean() {
  return del('build/*.html')
}

//watch
function watch() {
  gulp.watch(paths.src + 'scss/*.scss', styles);
  gulp.watch(paths.src + 'js/*.js', scripts);
  gulp.watch(paths.src + '*.html', htmls);
  gulp.watch(paths.src + '**/*.pug', templates);
  gulp.watch(paths.images.src,images);
  gulp.watch(paths.fonts.src,fonts);
}


//browserSync
function serve() {
  browserSync.init({
    server: {
      baseDir: paths.build
    }
  });
  browserSync.watch(paths.build + '**/*.*', browserSync.reload);
}

//
exports.templates = templates;
exports.styles = styles;
exports.images = images;
exports.fonts = fonts;
exports.scripts = scripts;
exports.htmls = htmls;
exports.clean = clean;
exports.watch = watch;

//параметры выполнения
gulp.task('build', gulp.series(
  clean,
  // styles,
  // scripts,
  // htmls
  gulp.parallel(styles, scripts, htmls,templates)
));

//Запуск
gulp.task('default', gulp.series(
  clean,
  gulp.parallel(styles, scripts, htmls,templates,images,fonts),
  gulp.parallel(watch, serve)
));
