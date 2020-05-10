import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import {Home} from './pages/home';
import {About} from './pages/about';
import {Contact} from './pages/contact';
import {Navvy} from './components/header'
import {Footy} from './components/footer'


function App() {
  return (
    <React.Fragment>
      <Navvy />
        <Router>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/contact' component={Contact}/>
          </Switch>
        </Router>
        <Footy />
    </React.Fragment>
  );
}

export default App;
