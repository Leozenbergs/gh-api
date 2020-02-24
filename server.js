var express = require('express');
var app = express();

app.use(require('./routes'))

app.use((req, res) => {
  res.status(404).send('Unknown request')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});