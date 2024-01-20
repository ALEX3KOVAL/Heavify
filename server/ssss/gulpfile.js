const {src, dest} = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");

function jsTask() {
    return src("../*.js")
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(dest("../../../dist/server"))
}

exports.jsTask = jsTask;
