require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');

const controller = require('./controller/controller');

const app = express();

app.use(bodyParser.json());
app.use(cors());

// app.use(express.static(`${_dirname}/../public/build`));

const PORT = 5555;
app.listen(PORT, () => {
  console.log('Its going down on port:' + ' ' + PORT + '!')
})
