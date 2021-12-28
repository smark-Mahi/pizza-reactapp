import React from 'react';
import Nav from './components/Nav';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './pages/Home';
import './App.css';
import Footer from './components/Footer';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Signup from './pages/Signup';



function App() {

  return (
  
    <div className="App">
    <Router>
      <Nav/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/menu' component={Menu}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/signup'><Signup/></Route>
      </Switch>
      <Footer/>
    </Router>
    </div>
    
  );
}


export default App;
