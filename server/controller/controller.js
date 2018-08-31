
module.exports = {
  create: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { imageUrl, productName, priceInput } = req.body;

    dbInstance.create_product([imageUrl, productName, priceInput])
      // .then(() => res.sendStatus(200).send(products))
      .then(data => {
        res.status(200).json({
          product: data[0],
        })
      })
      .catch(err => {
        res.status(500).send({errorMessage: "Oh no! Something went wrong!"});
      });
  },

  getAllInventory: (req, res, next) => {
    const dbInstance = req.app.get('db');

    dbInstance.get_inventory()
          .then(data => {
        console.log(data, 'This are my products<<<<=======>>>');
        res.status(200).json({
          inventory: data,
        })
      })
      .catch(err => {
        res.status(500).send({errorMessage: "Oh no! Something went wrong!"})
      })
  },
  
  update: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    const { params, query } = req;
 
    dbInstance.update_product([ params.id, query.desc ])
      .then( () => res.sendStatus(200) )
      .catch( err => {
        res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
        console.log(err)
      } );
  },

  deleteProduct: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    const { params } = req;
 
    dbInstance.delete_product([ params.id ])
      .then( () => res.sendStatus(200) )
      .catch( err => {
        res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
        console.log(err)
    });
  }
 };
 
