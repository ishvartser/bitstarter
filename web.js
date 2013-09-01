var express = require('express');
var app = express();
app.use(express.logger());

buf = new Buffer (256);

fs.readFileSync (index.html, String {
   if (err) throw err;
   buf.toString('utf-8');
});

app.get('/', function(request, response) {
  response.send('Hello World 3!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
