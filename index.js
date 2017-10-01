var express = require('express');

var app = express();

app.use(express.static('public'))
app.get('/', function (req, res) {;
  console.log('Trading AI web server is up on port 8888')
});

app.listen(8888);