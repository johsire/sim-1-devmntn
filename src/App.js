import React, { Component } from 'react';
import './App.css';
import Header from './component/Header/Header';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';

class App extends Component {
  // deleteProduct = this.props.deleteProduct()
  render() {
    return (
      <div className="App">
        <Header />
        <Form />
        <Dashboard  deleteProduct={this.deleteProduct}/>
      </div>
    );
  }
}

export default App;
