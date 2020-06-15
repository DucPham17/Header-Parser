// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
const requestIp = require("request-ip")

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/whoami", function (req, res) {
  var headers = req.headers;
  // console.log(headers['accept-language'])
  // console.log(headers['user-agent'])
  // console.log(requestIp.getClientIp(req))
  // console.log(headers.accept['accept-language'])
  // console.log(headers['user_agent'])
  const a = {ipaddress: requestIp.getClientIp(req),language : headers['accept-language'], software : headers['user-agent']}
  res.json(a) 
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
