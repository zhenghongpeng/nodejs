var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.get('/bye', function (req, res) {
    res.send('Good Bye');
});


var ip = process.env.OPENSHIFT_NODEJS_IP||'127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;
app.listen(port,ip);