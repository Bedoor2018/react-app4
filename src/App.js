import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import { runtime } from 'webpack';

const Nav=()=>{
  return(
    <nav>
      <ul>
     <li> <Link to="/">Home</Link></li>
     <li> <Link to="/About-us">Aboutus</Link></li>
     <li> <Link to="/Contact-us">Contactus</Link></li>
      </ul>
    </nav>
  )
};
const Home=()=>{
  return(
    <h1>Home</h1>
  )
};

const Aboutus=()=>{
  return(
    <h1>About-us</h1>
  )
};

const Contactus=()=>{
  return(
    <h1>Contact-us</h1>
  )
};


function App() {
  return (
    <div className="App">
     <Nav />
     <Routes>
       <Route  exact path="/" element={<Home />}   />
       <Route  path="/About-us" element={<Aboutus />}   />
       <Route  path="/Contact-us" element={<Contactus />}   />
     </Routes>
    </div>
  );
}

export default App;
