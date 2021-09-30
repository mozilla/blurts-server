"use strict";

const { src, watch, series, dest } = require("gulp");
const sass = require("gulp-sass");
const del = require("del");
const sourcemaps = require("gulp-sourcemaps");

// directory for building SCSS, and bundles
const buildDir = "./public/scss/libs/protocol/";
const finalDir = "./public/css/";

const compiledCssDirectories = [
    "./public/css/*",
    "!./public/css/legacy/**",
];

function cleanCompiledCssDirectory() {
    return del(compiledCssDirectories);
}

function resetCssDirectories() {
    return del(compiledCssDirectories.concat(buildDir));
}

function styles() {
    return src("./public/scss/app.scss")
        .pipe(sourcemaps.init())
        .pipe(sass().on("error", sass.logError))
        .pipe(sourcemaps.write("."))
        .pipe(dest(finalDir));
}

function assetsCopyLegacy() {
    return src(["./public/scss/partials/legacy/**/*"]).pipe(dest("./public/css/legacy/"));
}

function watchCss() {
    return watch("./public/scss/**/*.scss", { ignoreInitial: false }, series(cleanCompiledCssDirectory, styles));
}

function assetsCopy() {
    return src(["./node_modules/@mozilla-protocol/core/protocol/**/*"]).pipe(dest(buildDir));
}

exports.watchCss = watchCss;

exports.build = series(resetCssDirectories, assetsCopy, assetsCopyLegacy, styles);

exports.default = series(
    cleanCompiledCssDirectory, assetsCopy, styles, watchCss
);
