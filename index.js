require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const urlRoute = require('./routes/url.js');
const connectDB = require('./connect.js');
const bodyParser = require('body-parser');

// Basic Configuration
const port = process.env.PORT || 3000;

connectDB()
.then(() => console.log("Database Connected!"))
.catch((err) => console.log(err))

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(urlRoute)

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
