// if (process.env.NODE_ENV !== 'production') {
//     require('dotenv').config()
// }

const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
// const port  = process.env.PORT || 5000;

// app.use(express.static(__dirname + '/public'));
// app.set('views', __dirname + '/public');
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');

// app.set('view engine', 'html')
// app.engine('html', require('ejs').renderFile);
// app.use(express.static('public'))

app.listen(3001)