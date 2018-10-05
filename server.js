const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/editalsniffer-ui'));

app.get('/*', function(req, res) {
  res.sendFile(__dirname + '/dist/editalsniffer-ui/index.html');
});

app.listen(process.env.PORT || 4200);
