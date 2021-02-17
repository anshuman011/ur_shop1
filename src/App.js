import React, { Component } from 'react';
import classes from './App.css';
import Layout from './components/Layout/Layout';
import Shop from './containers/Shop/Shop';
// import Footer from './components/footer/footer';
import ProductDetails from './containers/Shop/OneProduct/ProductDetails/ProductDetails';

import {Route} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className={classes.App}>
      <Route path="/" component={Layout}/>
      <Route path="/" exact component={Shop}/>
      <Route path="/prod" component={ProductDetails}/>
      
      {/* <Layout/>
      <Shop/> */}
      {/* <Footer/> */}
      </div>
    );
  }
}


//so far,eject for css modules,react-router-dom,react-icons.
//removed react-bootstrap,mdbreact.

export default App;
