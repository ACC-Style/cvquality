module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
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
                tasks: ['sass','copy', 'exec']
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
    // grunt.loadNpmTasks('@micahgodbolt/grunt-phantomcss');


    grunt.registerTask('default', ['watch']);
}