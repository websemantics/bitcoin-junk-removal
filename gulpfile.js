/**
 * Generates all SVG and PNG logo variations from a single SVG template.
 *
 * The generated files are stored at 'dist/assets' folder.
 * There are 4 types of output that can be used (copied to desired location):
 *
 * (1) SVG files located at 'assets/svg' and generated directly from 'src/logo.template'
 * (2) PNG files located at 'assets/png' and generated from all the SVG files from previous step
 * (3) ICO files located at 'assets/ico' and generated from 'assets/png/original-mascot-h256@2x.png'
 * (4) SVG SPRITE files located at 'assets/sprite' in two format, symbol and css,
 *
 * @author    Web Semantics, Inc. Dev Team <team@websemantics.io>
 * @author    Adnan M.Sagar, PhD. <adnan@websemantics.io>
 */

  var gulp      = require("gulp");
  var smart     = require("gulp-svg-smart");

  /* Load svg-smart resources */
  smart.load("smart.json", "package.json");

  // ---------------------------------------------------
  // TASK : default - require SVG SMARTs ..
  // ---------------------------------------------------
  gulp.task('default', ['svg-smart-tasks'],function() {

  });
