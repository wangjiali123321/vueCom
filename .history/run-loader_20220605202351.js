const { runLoaders } = require('loader-runner');

const fs = require('fs');

const path = require('path');



runLoaders(

  {

    resource: path.resolve(__dirname, './src/App.vue'),

    loaders: [path.resolve(__dirname, './node_modules/webpack-vue-debug-loader')],

    context: {

      minimize: true,

    },

    readResource: fs.readFile.bind(fs),

  },

  (err, res) => {

    if (err) {

      console.log(err);

      return;

    }

    console.log(res);

  }

);