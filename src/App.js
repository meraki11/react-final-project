import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap/';
import NavbarDisplay from "./Components/NavbarDisplay";
import Home from "./Components/Home";
import Add from "./Components/Add";
import Ideas from "./Components/Ideas";
import Footer from "./Components/Footer";
import './App.css';

export default function App() {
  return (
    <Container fluid>
      <Router>
        <NavbarDisplay />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/add" component={Add} />
            <Route path="/ideas" component={Ideas} />
            <Route path="*" component={NotFound} />
          </Switch>
        <Footer />
      </Router>
    </Container>    
  );
}

function NotFound () {
  return <>You stumbled into a page that does not exist in this time stream</>;
}