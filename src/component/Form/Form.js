import React, { Component } from 'react';
import axios from 'axios';

import styled from 'styled-components';

export const Button = styled.button`
    background: red;
    padding: 10px;
    font-size: 0.8rem;
    margin-top: 20px;
    cursor: pointer;
    border: none;
`;

class Form extends Component {
  constructor(props) {
    super(props)
      this.state = {
        imageUrl: 'http://us-test.h2o-at-home.com/images/btn-shop-big.png',
        // 'http://dreamstop.com/wp-content/uploads/2013/11/Internet-dream-meaning.jpg',
        productName: 'Product Name!',
        priceInput: 0,
      }
      // this.handleChange = this.handleChange.bind(this)
      // this.handleCancel = this.handleCancel.bind(this)
      // this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleCancel = (e) => {
    console.log(e.target, 'cancel event being fired');
    e.preventDefault();
    this.setState({
      imageUrl: '',
      productName: '',
      priceInput: '',
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      imageUrl: this.state.imageUrl,
      productName: this.state.productName,
      priceInput: this.state.priceInput,
    }
    axios.post('/api/product', data)
      .then(res => {
        // console.log(res.data, 'response from backend');
        this.setState({
          imageUrl: 'http://us-test.h2o-at-home.com/images/btn-shop-big.png',
          // 'http://dreamstop.com/wp-content/uploads/2013/11/Internet-dream-meaning.jpg',
          productName: '',
          priceInput: '',
        })
      })
      .catch(err => {
        console.log(err, 'error from backend aftr axios');
      })
    // console.log('/api/products');
  }

  updateProduct = (id) => {
    axios.put(`/api/product/${id}`, {id})
         .then(res => {
           this.setState({
             products: res.data.inventory
           })
      })
  }

  render() {
    return(
      <div>
      {/* Image URL: {this.state.imageUrl}<br />
      Product Name: {this.state.productName}<br />
      Price: {this.state.priceInput} <br /> */}
      <img src={this.state.imageUrl} alt="Product" />
      <form onSubmit={e => this.handleSubmit(e)}>
        <br />
        <input
          name="imageUrl" placeholder='Image Url' 
          value={this.state.imageUrl} onChange={e => this.handleChange(e)} 
        />

        <br />
        <br />

        <input name="productName" placeholder='Product Name' value={this.state.productName} onChange={e => this.handleChange(e)}/>

        <br />
        <br />

        <input 
        name="priceInput"
        placeholder='Price' 
        value={this.state.priceInput} 
        onChange={e => this.handleChange(e)}
        type="number"
        />

        <br />
        <br />
        <Button>
        <button type="submit">Add to inventory</button>
        <button onClick={e => this.handleCancel(e)}>Cancel</button>
        </Button>
      </form>
      </div>
    )}
  }

export default Form;
