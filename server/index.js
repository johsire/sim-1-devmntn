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

massive(process.env.CONNECTION_STRING).then(dbInstance => {
  app.set('db', dbInstance)
}).catch(err => console.log(err, 'Error from maasive in the server!'));


// ENDPOINTS:
app.get("/api/inventory", inventoryController.getAllInventory);
app.post("/api/product", inventoryController.create);
// app.put("/api/inventory", inventoryController.update);




const PORT = 5555;
app.listen(PORT, () => {
  console.log('All the magic happens on port:' + ' ' + PORT + '!')
})
