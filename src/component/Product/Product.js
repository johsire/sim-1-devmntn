import React from 'react';

function Product({ products, title }) {
  return (
    <div>
      {products.map(product => {
        return(
          <div key={product.id}>
            <img src={product.imageurl} alt={product.name} />
            <h1>{product.name}</h1>
            <h4>Price: {product.price}</h4>
            <button type="submit">Delete Product</button> 
            <button onClick={e => this.handleCancel(e)}>Edit Product</button>
          </div>
        )
      })}
    </div>
  )
};

export default Product;
