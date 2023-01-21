const http = require('http');
const bodyParser = require("body-parser");
const app = require('./app');
const cors = require("cors");



app.set(process.env.PORT || 3000)
const server = http.createServer(app)

server.listen(process.env.PORT || 3000);

