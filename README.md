Stacks - HTML5 / Angularjs / Cordova IOS Mobile App
==========================


# Dependencies

[Bower](http://bower.io)

[Grunt](http://gruntjs.com) ( only for development )


## Installation

```bash
$ git clone https://github.com/ryanhbowman/sqlite
$ cd sqlite
$ cordova platform add ios
$ cordova plugin add https://github.com/wildabeast/BarcodeScanner
$ cordova plugin add https://github.com/lite4cordova/Cordova-SQLitePlugin
$ cordova plugin add org.apache.cordova.console
```

This will install the ios platform cordova plugins.


### Installing bower components

```bash
$ cd wwww
$ bower install
// Testing components for Angularjs
$ bower install angular-mocks
$ bower install angular-scenario
```


### Setting up the development environment

Make sure you have grunt installed, then run

```bash
$ npm install
$ npm install -g grunt-cli
$ npm install -g karma
$ npm install grunt-shell grunt-karma grunt-contrib-watch --save-dev
$ grunt devmod
```

On a new terminal window

```bash
$ cordova serve ios
```

This launches the address (http://localhost:8000/ios/www/) with the application loaded for preview.

### Building the application on Xcode

```bash
$ open -a Xcode platforms/ios
```
