var express = require('express');
var server = express ();
var port =8080;

server.use(express.static(__dirname + '/public'));

server.listen(port, function(){
  console.log('Now Listening on port', port);
});
