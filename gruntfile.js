module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
       connect: {
          server: {
            options: {
              port: 8000,
              base: 'docs'
            }
          }
        },
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'assets/scss/',
                    src: ['*.scss', '**/*.scss'],
                    dest: 'assets/css/',
                    ext: '.css'
                }]
            }
        },
        cssmin: { 
          options: {
               compress: true,
               yuicompress: true,
               optimization: 2
            },
          target: {
            files: [{
              expand: true,
              cwd: 'assets/css',
              src: ['*.css', '!*.min.css'],
              dest: 'assets/css',
              ext: '.min.css'
            }]
          }
        },
        copy: {
            main: {
                expand: true,
                src: ['assets/css/*.css','assets/css/**/*.css','assets/images/*'],
                dest: 'docs/',
            },
        },
        exec: {
            echo_something: 'npm run styleguide'
        },
        livereload  : {
            options   : {
              base    : 'docs',
            },
            files     : ['docs/**/*','docs/*.html']
        },
        watch: {
            css: {
                files: 'assets/scss/**/*.scss',
                tasks: ['sass','cssmin','copy', 'exec']
            }
        }
  //       phantomcss: {
  //   desktop: {
  //     options: {
  //       screenshots: 'baselines/desktop',
  //       results: 'results/desktop',
  //       viewportSize: [1280, 800]
  //     },
  //     src: [
  //       'tests/phantomcss/start.js',
  //       'tests/phantomcss/*-test.js'
  //     ]
  //   }
  // }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-livereload');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    // grunt.loadNpmTasks('@micahgodbolt/grunt-phantomcss');


    grunt.registerTask('default', ['connect','livereload','sass','watch']);
}