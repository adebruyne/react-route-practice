import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Route, Link } from "react-router-dom";
import NavBar from "./NavBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React-Routes</h1>
        </header>
        <NavBar />

        <Route path="/" exact={true} component={Landing} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/llama" component={Llama} />
        <Route path="/llama/:llamas" component={SpecificLlama} />
      </div>
    );
  }
}

const Landing = props => {
  return (
    <div>
      <h1>This is the crash-landing page!</h1>
    </div>
  );
};

const Home = props => {
  return (
    <div>
      <h1>Welcome Home!</h1>
    </div>
  );
};
const About = props => {
  return (
    <div>
      <h1>About!</h1>
    </div>
  );
};

const formatAsLink = (toUrl, name) => {
  return <li><Link to={toUrl}>{name}</Link></li>
}



const Llama = props => {

  let allLlama = [
    'Schllama llama',
    'Mama llama',
    'Rama llama'
  ];

  return (
    <div>
      <h1>Welcome Llamas! Our overlords!</h1>
      <ul>
        {allLlama.map(llama => formatAsLink(`${props.match.url}/${llama}`, llama))}
        {/* <li>
          <Link to={`${props.match.url}/schllama`}>Schllama Llama</Link>
        </li>
        <li>
          <Link to={`${props.match.url}/mama`}>Mama Llama</Link>
        </li>
        <li>
          <Link to={`${props.match.url}/rama`}>Rama Llama</Link>
        </li> */}
      </ul>
    </div>
  );
};

const SpecificLlama = props => {
  console.log(props);
  return (
    <div>
      <h1>This is the coolest Llama</h1>
      <h2>{props.match.params.llamas}</h2>
    </div>
  );
};

export default App;
