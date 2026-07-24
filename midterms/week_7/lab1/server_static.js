var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('You have successfully created second app!');
});

// NEW ROUTE - YOUR PROFILE
app.get('/profile', function (req, res) {
    res.send(`
        <h1>My Profile</h1>
        <p><strong>Name:</strong> Dannah Mikayla M. Sanchez</p>
        <p><strong>Course:</strong> BS Information Technology</p>
        <p><strong>Year & Section:</strong> 3rd Year - WD-301</p>
    `);
});

var server = app.listen(3002, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});