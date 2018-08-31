import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
  constructor(props) {
    super(props)
      this.state = {
        imageUrl: 'http://dreamstop.com/wp-content/uploads/2013/11/Internet-dream-meaning.jpg',
        productName: '',
        priceInput: 0,
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleCancel = this.handleCancel.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  };

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
          imageUrl: 'http://dreamstop.com/wp-content/uploads/2013/11/Internet-dream-meaning.jpg',
          productName: '',
          priceInput: '',
        })
      })
      .catch(err => {
        console.log(err, 'error from backend aftr axios');
      })
    // console.log('/api/products');
  }


  render() {
    return(
      <div>
      Image URL: {this.state.imageUrl}<br />
      Product Name: {this.state.productName}<br />
      Price: {this.state.priceInput} <br />
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
        <button type="submit">Add to inventory</button> 
        <br />
        <br /> 
        <button onClick={e => this.handleCancel(e)}>Cancel</button>

      </form>
      </div>
    )}
  }

export default Form;
