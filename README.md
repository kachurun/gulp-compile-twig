gulp-twig-build
=================

## Installation

```sh
npm install --save gulp-twig-build
```

## Usage

```javascript
const twig_compile = require('gulp-twig-build');

gulp.task('twig', () => {
  gulp.src('./src/**/*.twig')
    .pipe(twig_compile())
    .pipe(gulp.dest('./dest/'))
});
```


## Options

The options object supports the `module` and `twig` options for the [Twig compiler](https://github.com/justjohn/twig.js/wiki/Compiling-Templates).

 * `module`  
   Should the output be written in module format. Supported formats:
     * node:  Node.js / CommonJS 1.1 modules
     * amd:   RequireJS / Asynchronous modules (requires `twig`)
     * cjs2:  CommonJS 2.0 draft8 modules (requires `twig`)
 * `twig`  
   Used with module. The location relative to the output directory of twig.js. (used for module dependency resolution).

```javascript
const twig_compile = require('gulp-twig-build');

gulp.task('twig', function() {
  gulp.src('./src/**/*.twig')
    .pipe(twig_compile({module: 'amd', twig: 'lib/twig'}))
    .pipe(gulp.dest('./dest/'))
});
```
