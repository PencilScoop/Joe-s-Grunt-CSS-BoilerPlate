module.exports = {
  options: {
    livereload: true,
  },
  scripts: {
    files: ['js/*.js'],
    tasks: ['jshint', 'concat', 'uglify'],
    options: {
      spawn: false,
    }
  },
  css: {
    files: ['css/*.css'],
    tasks: ['autoprefixer', 'cssmin'],
    options: {
      spawn: false,
    }
  },
  svg: {
    files: ['svg/*svg'],
    tasks: ['svg-inject'],
    options: {
      spawn: false,
    }
  },
  images: {
    files: ['images/**/*.{png,jpg,gif,svg}', 'images/*.{png,jpg,gif,svg}'],
    tasks: ['imagemin'],
    options: {
      spawn: false,
    }
  },
  html:{
    files: ['./**/*.html'],
    tasks: ['prettify'],
    options: {
      spawn: false
    }
  }
}