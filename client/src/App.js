import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavbarPage from './components/NavbarPage';
import Footer from './components/Footer'
import Home from './components/Home';
import Products from './components/Products';
import About from './components/About';
import Recipes from './components/Recipes';

import ProductAdmin from './components/ProductAdmin';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavbarPage />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/products" component={Products} />
              <Route exact path="/about" component={About} />
              <Route exact path="/recipes" component={Recipes} />
              <Route exact path="/admin" component={ProductAdmin} />
            </Switch>
              <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
