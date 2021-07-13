const { src, watch, series, dest } = require("gulp");
const sass = require("gulp-sass");
const del = require("del");

// directory for building SCSS, and bundles
const buildDir = "./public/scss/libs/protocol/";
const finalDir = "./public/css/";

function clean() {
    return del([
        finalDir,
        "!./public/css/legacy"
    ]);
}

function reset() {    
    return del([
        finalDir,
        buildDir,
    ]);
}

function styles() {
    return src("./public/scss/app.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(dest(finalDir));
}

function assetsCssCopy() { 
    return src(["./public/scss/partials/legacy/**/*"]).pipe(dest("./public/css/legacy/"));
}

function watchCss() {
    return watch("./public/scss/**/*.scss", { ignoreInitial: false }, series(clean, styles));
}

exports.watchCss = watchCss;
exports.assetsCssCopy = assetsCssCopy;

function assetsCopy() { 
    return src(["./node_modules/@mozilla-protocol/core/protocol/**/*"]).pipe(dest(buildDir));
}

exports.build = series(reset, assetsCopy, assetsCssCopy, styles);
exports.default = series(
    clean, assetsCopy, styles, function() {
        // You can use a single task
        watch("./public/scss/**/*.scss", { ignoreInitial: false }, series(clean, styles));
    }
);
