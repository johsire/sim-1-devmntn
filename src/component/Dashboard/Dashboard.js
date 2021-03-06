import React, { Component } from 'react';
import Product from '../Product/Product';
import axios from 'axios';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    }
    this.deleteProduct = this.deleteProduct.bind(this);
  }

  componentDidMount() {
    axios.get("/api/inventory")
      .then((res) => {
      this.setState({ products: res.data.inventory })
    })
  }

  deleteProduct = (id) => {
    axios.delete(`/api/product/${id}`, {id: id})
    .then(res => {
      this.status(200);
    })
  };

  render() {
    const { products } = this.state;
    if (products.length > 0) {
      return (<Product products={products} title="Our Products" />)
    }
    return (<h1>Loading...</h1>)
  }
};

export default Dashboard;
