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

const Home = lazy(() => import('./components/Home'));

class App extends Component {
  render() {
    return (
      <div className="App">

        <Router>

          {/* <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Cookies">Cookies</Link>
              </li>
              <li>
                <Link to="/Politicas">Politicas de Privacidad</Link>
              </li>
            </ul>
          </nav> */}
          <Navbar bg="primary" fixed="top" expand="lg" variant="dark">
            <Navbar.Brand as={Link} to="/">Covid19 España</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/Cookies" component={CookiesPagina} />
              <Route path="/Politicas" component={PoliticasPrivacidad} />
              <Route path="/ProcesamientoInfo" component={ProcesamientoInfo} />
              <Route path="/Notes" component={Notes} />

            </Switch>

          </Suspense>
        </Router>






      </div>
    );
  }
}

export default App;
