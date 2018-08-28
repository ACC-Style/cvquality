
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
        postcss: {
            options: {
              map: true, // inline sourcemaps

              // or
              map: {
                  inline: false, // save all sourcemaps as separate files...
                  annotation: 'dist/css/maps/' // ...to the specified directory
              },

              processors: [
                require('pixrem')(), // add fallbacks for rem units
                require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
                require('cssnano')() // minify the result
              ]
            },
            dist: {
              src: 'assets/css/*.css'
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
        watch: {
            css: {
                files: 'assets/scss/**/*.scss',
                tasks: ['sass', 'postcss', 'copy', 'exec'],
                options:{livereload: true,}
            },
            html:{
               files: 'docs/*.html',
               task:[''],
                options: {

                  livereload: true,
                },

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
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-postcss');
    // grunt.loadNpmTasks('@micahgodbolt/grunt-phantomcss');
    var backstopjs = require('backstopjs');
    grunt.registerTask('backstop', 'BackstopJS integration', function (cmd) {
        // cmd is either 'reference', 'test', or 'openReport'
        var done = this.async();
        backstopjs(cmd).then(function () {
            done(true);
        }).catch(function () {
            done(false);
        });
    });

    grunt.registerTask('default', ['connect','sass','postcss','copy', 'exec','watch']);
}