require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');

const Controller = require('./controller/Controller');

const app = express();

app.use(bodyParser.json());
app.use(cors());

// app.use(express.static(`${_dirname}/../public/build`));

massive(process.env.CONNECTION_STRING).then(dbInstance => {
  app.set('db', dbInstance)
}).catch(err => console.log(err, 'Error from maasive in the server!'));


// ENDPOINTS:
// GET
app.get("/api/inventory", Controller.getAllInventory);
// POST/CREATE
app.post("/api/product", Controller.create);
// DELETE
app.delete('/api/product:id', Controller.delete);
// PUT/EDIT/UPDATE
app.put('/api/product/:id',  Controller.update);
// app.put("/api/inventory", Controller.update);

const PORT = 5555;
app.listen(PORT, () => {
  console.log('All the magic happens on port:' + ' ' + PORT + '!')
})
