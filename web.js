var express = require('express');
var app = express();
app.use(express.logger());

fs.readFileSync (index.html, String {
   if (err) throw err;
   buf = new Buffer (256);
   len = buf.write ('\u00bd', 0);
   console.log ("msg: " + buf.toString ('utf-8', 0, len));
});

app.get('/', function(request, response) {
  response.send('Hello World 3!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
