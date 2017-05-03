var express = require('express');
var app = express();
var path = require('path');
var docuSign = require('./docuSign.js');


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../client','index.html'))
})

app.use(express.static(path.join(__dirname, '../client')))


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

