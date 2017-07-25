import express from 'express';
import path from 'path';
import open from 'open'; // open in browser
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3000;
const app = express(); // create instance of express
const compiler = webpack(config);

// tell express we want to use middleware and pass it the compiler set above
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

// declare routing
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

// tell express to listen to port
app.listen(port, function(err) {
  if (err) {
    console.log(err);
  }
  else {
    open('http://localhost:' + port);
  }
});
