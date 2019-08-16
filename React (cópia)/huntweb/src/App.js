import React, { Component } from 'react';
import Header from './components/header';
import './style.css';
import Routes from './routes';


const App = () => (
  <div className = "App">
    <Header/>
    <Routes/>
  </div>
);



export default App;
