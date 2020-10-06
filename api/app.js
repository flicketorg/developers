const path = require('path');
const express = require('express');

const app = express();
 
var autoRoutes = require('express-auto-routes')(app);
autoRoutes(path.join(__dirname, './routes'));
 
app.listen(8081);
