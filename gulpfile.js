//
// Gulpfile
//

const {src, dest, parallel, watch, series} = require('gulp'),
    del = require('del'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    cssnano = require('gulp-cssnano'),
    htmlmin = require('gulp-htmlmin'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    ejs = require('gulp-ejs'),
    browserSync = require('browser-sync').create();

// compile html
function html() {
    return src('src/*.ejs')
        .pipe(ejs({ENDPOINT: process.env['ENDPOINT']}))
        .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
        .pipe(rename({extname: '.html'}))
        .pipe(dest('docs/'))
}

// compile scss
function scss() {
    return src('src/assets/scss/theme.scss')
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(autoprefixer([
            "last 1 major version",
            ">= 1%",
            "Chrome >= 45",
            "Firefox >= 38",
            "Edge >= 12",
            "Explorer >= 10",
            "iOS >= 9",
            "Safari >= 9",
            "Android >= 4.4",
            "Opera >= 30"], {cascade: true}))
        .pipe(dest('docs/assets/css'))
}

// serve and live reload
function serve() {
    browserSync.init({
        files: "./*.html",
        startPath: "./index.html",
        server: {
            baseDir: "./docs",
            routes: {},
            middleware: function (req, res, next) {
                if (/\.json|\.txt|\.html/.test(req.url) && req.method.toUpperCase() == 'POST') {
                    console.log('[POST => GET] : ' + req.url);
                    req.method = 'GET';
                }
                next();
            }
        }
    })
}

// clean build folder
async function clean() {
    await del(['docs'])
}

// copy asset files
async function copyFiles() {
    return src(['src/assets/**/*.*', '!src/assets/scss/**/*.*', '!src/assets/js/**/*.*'])
        .pipe(dest('docs/assets'))
}

// copy asset Js
async function copyJs() {
    return src(['src/assets/js/**/*.*'])
        .pipe(uglify({}))
        .pipe(dest('docs/assets/js'))
}


// copy asset files
async function copyCname() {
    return src('CNAME')
        .pipe(dest('docs/'))
}

// copy bootstrap to vendor folder
async function bootstrap() {
    return src(['node_modules/bootstrap/dist/**/*.*'])
        .pipe(dest('src/assets/vendor/bootstrap'))
}

// copy popper.js to vendor folder
async function popperJs() {
    return src(['node_modules/popper.js/dist/umd/**/*.*'])
        .pipe(dest('src/assets/vendor/popper.js'))
}

// copy jquery to vendor folder
async function jquery() {
    return src(['node_modules/jquery/dist/**/*.*'])
        .pipe(dest('src/assets/vendor/jquery'))
}

// clean default vendors
async function cleanDefaultVendors() {
    await del(['src/assets/vendor/bootstrap', 'src/assets/vendor/popper.js', 'src/assets/vendor/jquery']);
}

// build and publish
exports.build = series(clean, parallel(copyFiles, copyJs, copyCname, scss, html));

// default task for deving
exports.default = function () {
    serve();
    watch('src/**/*.ejs', {ignoreInitial: false}, html);
    watch('src/assets/scss/**/*.scss', {ignoreInitial: false}, scss);
    watch(['src/assets/**/*.*', '!src/assets/scss/**/*.*'], {ignoreInitial: false}, copyFiles);
    watch('docs/**/*.*').on('change', browserSync.reload);
};

// clean default vendors and copy them to vendor folders
// trigger by using the postinstall script of package.json
exports.vendors = series(cleanDefaultVendors, bootstrap, popperJs, jquery);

