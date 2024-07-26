const gulp = require('gulp'); //Comando para importar o plugin "gulp"

const sass = require('gulp-sass')(require('sass')); //Comando para importar o plugin "sass"

const imagemin = require('gulp-imagemin'); //Comando para importar o plugin "imagemin"

//Funcao para comprimir arquivos css
function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/css'));
}

//Funcao para comprimir arquivos imagens
function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

exports.default = gulp.parallel(styles, images);

exports.watch = function () {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}