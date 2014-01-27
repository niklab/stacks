module.exports = function(config){
    config.set({
    basePath : '../',

    files : [
      'www/bower_components/angular/angular.js',
      'www/bower_components/angular/angular-*.js',
      'www/bower_components/angular-mocks/angular-mocks.js',
      'www/js/**/*.js',
      'test/unit/**/*.js'
    ],

    exclude : [
      //'www/bower_components/angular/angular-loader.js',
      'www/bower_components/angular/*.min.js',
      'www/bower_components/angular-scenario/angular-scenario.js'
    ],

    autoWatch : false,

    frameworks: ['jasmine'],

    browsers : [process.env.TRAVIS ? 'Firefox' : 'Chrome'],

    plugins : [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-phantomjs-launcher',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

})}
