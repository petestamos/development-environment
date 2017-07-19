var express = require('express');
var path = require ('path');
var open = require('open') // open in browser

var port = 3000;
var app = express(); // create instance of express

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
