import React, { Component } from 'react';
import { HashRouter, Link, Switch } from 'react-router-dom';

import routes from './routes';
import './App.css';
import Header from './component/Header/Header';
// import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';


class App extends Component {
  // deleteProduct = this.props.deleteProduct()
  render() {
    var id = 2;
    return (
      <HashRouter>
      <Switch>
      <div>
      <Link to='/'>Dashboard</Link>
      <Link to='/add'>Add Inventory</Link>
      <Link to={`/edit/${id}`}></Link>
        <Header />
        <Form />
        {/* <Dashboard /> */}
      {routes}
      </div>
      </Switch>
      </HashRouter>
    );
  }
}

export default App;
