//import logo from './logo.svg';
//import './App.css';
//import MenuComponent from './components/MenuComponent';
//import { Route, Router, Switch } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form} from 'react-bootstrap';
import Navibar from './pages/Navibar';
import {Home} from './pages/Home'
import {Users} from './pages/Services'
import {About} from './pages/About'
import {Selected} from './pages/Selected'

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"


function App() {
  return (
    <>
    <Router>
<Navibar />
<Switch>
  <Route exact path="/home" component={Home} />
  <Route path="/about" component={About} />
  <Route path="/services" component={Users} />
  <Route path="/selected" component={Selected} />

</Switch>
</Router>
 
  </>
 );
}
export default App;
