var express = require('express');
var cors = require('cors')
var app = express()

app.use(cors())

app.get('/api', cors(), (req, res, next) => {
  res.json({ msg: 'WHOAH with CORS it works! 🔝 🎉' })
})

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(require('./routes'))

app.use((req, res) => {
  res.status(404).send('Unknown request')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});