const{src,dest}= require("gulp");
const sassdoc = require('gulp-sassdoc');
const sass = require('gulp-sass')(require('sass'));

//Tarea por defecto

function defaultTask(cb) {
    // place code for your default task here
    cb();
    console.log("");
    console.log("Bienvenido al gulp de SweetFragance");
    console.log("Estas son las TASK disponibles para ejecutar:");
    console.log("");
    console.log("generarSassDoc - Generara el SassDoc en una nueva carpeta llamada Documentacion");
    console.log("compilar_sass - Compilara los archivos scss en la ruta definida");



  }
  exports.default = defaultTask

//Tarea generear sassDoc
function generateSassDoc(){

    return src("src/sass").pipe(sassdoc({
    dest: "documentacion"
    }));

}
exports.generarSassDoc = generateSassDoc;

//Tarea compilar sass
function compilar_sass(){
    return src("src/sass/global.scss")
    .pipe(sass())
    .pipe(dest("src/css/styles.css"));
}

exports.compilar_sass = compilar_sass;   

