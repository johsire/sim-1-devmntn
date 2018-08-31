import React from 'react';
// import App from '../../App';

function Product({ products, title, deleteProduct }) {
  return (
    <div>
      {products.map(product => {
        return(
          <div key={product.id}>
            <img src={product.imageurl} alt={product.name} />
            <h1>{product.name}</h1>
            <h4>Price: {product.price}</h4>
            {/* <button type="submit">Delete Product</button>  */}
            <button type="button" onClick={() => this.deleteProduct(products.id)}>Delete Product</button>   
            <button onClick={e => this.handleCancel(e)}>Edit Product</button>
          </div>
        )
      })}
    </div>
  )
};

export default Product;
