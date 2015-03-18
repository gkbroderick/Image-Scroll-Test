module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true,
      },
      dist: {
        files: {
          'stylesheets/app.css': 'sass/app.sass'
        }
      }
    },
    watch: {
      options: {
        livereload: true,
      },
      sass: {
        files: ['sass/**/*.sass', 'sass/**/*.scss'],
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.registerTask('default', ['sass']);
};


