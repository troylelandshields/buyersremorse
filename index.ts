// /// <reference path="remorse.ts" />

const express = require('express');
const app = express();
const service = require('./service.ts');


app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request:any, response:any) {
  // let summary: Remorse.ProductSummary
  var summary = service.summarize('chromecast');
  response.send(summary);
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
