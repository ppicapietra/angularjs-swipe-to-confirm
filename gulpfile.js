const gulp = require( 'gulp' );
const concat = require( 'gulp-concat' );
const uglify = require( 'gulp-uglify' );
const cleanCSS = require( 'gulp-clean-css' );

// Rutas de los archivos fuente
const paths = {
	scripts: [ 'src/swipe-to-confirm.directive.js' ],
	styles: [ 'src/swipe-to-confirm.css' ]
};

// Tarea para generar `dist/swipe-to-confirm.js`
gulp.task( 'scripts', function () {
	return gulp.src( paths.scripts )
		.pipe( concat( 'swipe-to-confirm.js' ) ) // Une los archivos JS
		.pipe( gulp.dest( 'dist' ) ); // Guarda en dist/
} );

// Tarea para generar `dist/swipe-to-confirm.min.js`
gulp.task( 'scripts-min', function () {
	return gulp.src( paths.scripts )
		.pipe( concat( 'swipe-to-confirm.min.js' ) )
		.pipe( uglify() ) // Minifica el JS
		.pipe( gulp.dest( 'dist' ) );
} );

// Tarea para generar `dist/swipe-to-confirm.css`
gulp.task( 'styles', function () {
	return gulp.src( paths.styles )
		.pipe( concat( 'swipe-to-confirm.css' ) )
		.pipe( gulp.dest( 'dist' ) );
} );

// Tarea para generar `dist/swipe-to-confirm.min.css`
gulp.task( 'styles-min', function () {
	return gulp.src( paths.styles )
		.pipe( concat( 'swipe-to-confirm.min.css' ) )
		.pipe( cleanCSS() ) // Minifica el CSS
		.pipe( gulp.dest( 'dist' ) );
} );

// Tarea por defecto que compila todo
gulp.task( 'build', gulp.parallel( 'scripts', 'scripts-min', 'styles', 'styles-min' ) );