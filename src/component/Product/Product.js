import React from 'react';

function Product({ products, title, viatu }) {
  return (
    <div>
      {products.map(product => {
        return(
          <div key={product.id}>
            <h1>{viatu}</h1>
            <img src={product.image_url} alt={product.name} />
            <h1>{product.name}</h1>
            <h4>Price: ${product.price}.00</h4>
          </div>
        )
      })}
    </div>
  )
};

export default Product;
