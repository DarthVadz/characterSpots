import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import { Navbar } from '../Nav/Nav';
import { Feed } from '../Feed/Feed';
 
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import Error from '../components/Error';
import Navigation from '../components/Navigation';

import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App () {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/about" component={About}/>
             <Route path="/contact" component={Contact}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
      <Feed />
      
      <AmplifySignOut />
      <footer className="footer">Copywrong 2020</footer>
    </div>
  );
}

export default withAuthenticator(App);
