import gulp from 'gulp';
import babelify from 'babelify';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import server from './server';

gulp.task('default', ['build','server','watch']);
gulp.task('build',['build:css','build:html','build:js'])

// building my top level javascript files
gulp.task('build:js', () => {
  ['app.js'].forEach((file) => { // add js files here to build them properly
    const b = browserify();

    return b.transform(babelify)
      .add(`js/${file}`)
      .bundle()
      .pipe(source(file))
      .pipe(gulp.dest('build/js/'));
  });
});

// building my html documents
gulp.task('build:html', () => {
  return gulp.src(['index.html'])
    .pipe(gulp.dest('build'));
});

// gotta build that css!
gulp.task('build:css', () => {
  return gulp.src(['css/*.css'])
    .pipe(gulp.dest('build'));
});

// running an express server (look at server.js for more info)
gulp.task('server', () => {
  const port = process.env.PORT || 8080;
  server.listen(port, () => console.log(`server listening at port ${port}`));
});

gulp.task('watch', () => {
  gulp.watch('js/**/*', ['build']);
});
