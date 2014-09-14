# CSS-Connector

Lets NPM all the things! This library exposes connection points for your fancy CSS module to integrate directly with your favourite build tools. Install your CSS via NPM and manage everything via your `package.json`.


## Usage

`css-connector` integrates into the main file of your module, usually `index.js`. There you specify a render method and file name and expose the connector.

    var cssConnector = require('../'),
        sass = require('node-sass');

    function render(){
      return sass.renderSync({
        file: './my/style.scss'
      });
    }

    module.exports = cssConnector(render, 'css-module.css');
