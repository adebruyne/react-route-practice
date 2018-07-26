import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Route, Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React-Routes</h1>
        </header>
       <ul>
         <li><Link to="/">Landing</Link></li>
         <li><Link to="/home">HOME</Link></li>
         <li><Link to="/about">ABOUT</Link></li>
         <li><Link to="/llama">LLAMA</Link></li>
       </ul>

       <Route path="/" exact={true} component= {Landing} />
       <Route path="/home" component={Home} />
       <Route path="/about" component={About} />
       <Route path="/llama" component={Llama} />
      </div>
    );
  }
}


const Landing = (props) => {
  return(
    <div>
      <h1>This is the crash-landing page!</h1>
      </div>
  );
}

const Home = (props) => {
  return(
    <div>
      <h1>Welcome Home!</h1>
      </div>
  );
}
const About= (props) => {
  return(
    <div>
      <h1>About!
      </h1>
      </div>
  );
}
const Llama = (props) => {
  return(
    <div>
      <h1>Welcome Llamas! Our overlords!</h1>
      </div>
  );
}

export default App;
