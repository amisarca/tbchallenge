var express = require('express');
var fs = require('fs');
var app = express();

app.set('port', (process.env.PORT || 8080))
app.use(express.static(__dirname + '/public'))

app.get(/^(.*)$/, function(req, res){
  var path = '.' + req.params[0];
  fs.stat(path, function(err, stat) {
    if (err || !stat.isFile()) {
      path = './public/index.html';
    }
    console.log('Serving', path);
    res.sendfile(path);
  });
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
