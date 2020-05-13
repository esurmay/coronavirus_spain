import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

import logo from './logo.svg';
import './App.css';
//import  Home  from './components/Home';

import AvisoCookies from './components/AvisoCookies';
import PoliticasPrivacidad from './components/PoliticasPrivacidad';
import ProcesamientoInfo from './components/ProcesamientoInfo';
import CookiesPagina from './components/CookiesPagina';
import Notes from './components/Notes';
import Desescalada from './components/desescalada';
import CasosDiarios from './components/CasosDiarios';
 
const Home = lazy(() => import('./components/Home'));

class App extends Component {
  render() {
    return (
      <div className="App">

        <Router>
          <Navbar className="color-nav" fixed="top" expand="lg" variant="dark">
            <Navbar.Brand as={Link} to="/coronavirus_spain">Covid19 España</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/coronavirus_spain" component={Home} />
              <Route path="/Cookies" component={CookiesPagina} />
              <Route path="/Politicas" component={PoliticasPrivacidad} />
              <Route path="/ProcesamientoInfo" component={ProcesamientoInfo} />
              <Route path="/Notes" component={Notes} />
              <Route path="/FasesDesescalada" component={Desescalada} />
              <Route path="/Casos" component={CasosDiarios} />
            </Switch>
          </Suspense>
        </Router>

      </div>
    );
  }
}

export default App;
