'use strict';

const gulp = require('gulp');

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
  build: './build/'           // paths.build
};

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

function scripts() {
  return gulp.src(paths.src + 'js/*.js')
    .pipe(plumber())
    .pipe(babel({       // транспилятор ,т.е. допустим js es6 компилирует в кроссбраузерную ES5(одного синтексиса в другой)
      presets: ['env']
    }))
    .pipe(uglify())    // сжатие файлов
    .pipe(concat('script.min.js'))// соеденяет и можно как в этом примере сразу дать название файлу
    .pipe(gulp.dest(paths.build + 'js/'))
}

function htmls() {
  return gulp.src(paths.src + '*.html')
    .pipe(plumber())
    .pipe(replace(/\n\s*<!--DEV[\s\S]+?-->/gm, ''))
    .pipe(gulp.dest(paths.build));
}

function clean() {
  return del('build/')
}

function watch() {
  gulp.watch(paths.src + 'scss/*.scss', styles);
  gulp.watch(paths.src + 'js/*.js', scripts);
  gulp.watch(paths.src + '*.html', htmls);
}

function serve() {
  browserSync.init({
    server: {
      baseDir: paths.build
    }
  });
  browserSync.watch(paths.build + '**/*.*', browserSync.reload);
}

exports.styles = styles;
exports.scripts = scripts;
exports.htmls = htmls;
exports.clean = clean;
exports.watch = watch;

gulp.task('build', gulp.series(
  clean,
  // styles,
  // scripts,
  // htmls
  gulp.parallel(styles, scripts, htmls)
));

gulp.task('default', gulp.series(
  clean,
  gulp.parallel(styles, scripts, htmls),
  gulp.parallel(watch, serve)
));
