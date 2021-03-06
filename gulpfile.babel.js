import gulp from 'gulp';
import babelify from 'babelify';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import server from './server';
import livereload from 'gulp-livereload';

gulp.task('default', ['build','server','watch']);
gulp.task('build',['build:svg','build:css','build:html','build:js'])

// building my top level javascript files
gulp.task('build:js', () => {
  ['app.js'].forEach((file) => { // add js files here to build them properly
    const b = browserify();

    return b.transform(babelify)
      .add(`js/${file}`)
      .bundle()
      .pipe(source(file))
      .pipe(gulp.dest('build/js/'))
      .pipe(livereload());
  });
});

// building my html documents
gulp.task('build:html', () => {
  return gulp.src(['index.html'])
    .pipe(gulp.dest('build'))
    .pipe(livereload());
});

// gotta build that css!
gulp.task('build:css', () => {
  return gulp.src(['css/*.css'])
    .pipe(gulp.dest('build'))
    .pipe(livereload());
});

gulp.task('build:svg', () => {
  return gulp.src(['svgs/*.svg'])
    .pipe(gulp.dest('build/svgs/'))
    .pipe(livereload());
});

// running an express server (look at server.js for more info)
gulp.task('server', () => {
  const port = process.env.PORT || 8080;
  server.listen(port, () => console.log(`server listening at port ${port}`));
});

gulp.task('watch', () => {
  livereload.listen();
  gulp.watch('js/**/*', ['build']);
  gulp.watch('css/*', ['build']);
  gulp.watch('gulpfile.babel.js',['build'])
});
