/*global module:false*/
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        karma: {
            unit: {
                //configFile: 'config/karma.conf.js',
                //background: true
            },
            travis: {
                configFile: 'config/karma.conf.js',
                singleRun: true,
                browsers: ['PhantomJS']
            }
        },
        watch: {
          //karma: {
            //    files: ['www/js/**/*.js', 'test/unit/**/*.js'],
              //  tasks: ['karma:unit:run']
          //},
          files: [
            'www/**'
          ],
          tasks: ['shell']
        },
        shell: {
          _options: {
            failOnError: true,
            stdout: true
          },
          debug_ios: {
            command: 'cordova prepare ios'
          }
        },
    });

    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-karma');

    // Default task
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('devmode', ['karma:unit', 'watch']);
    grunt.registerTask('test', ['karma:travis'])

};
