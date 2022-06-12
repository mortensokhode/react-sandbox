import React from 'react'
import './varDefinitions.css';
import './AppNy.css';
// eslint-disable-next-line
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// eslint-disable-next-line
import Header from './components/header'
import Skills from './components/skills'
// import ProjectCarousel from './components/projectCarousel';

function App() {
  return (
    <div id="container">
            <Header></Header>
            <Skills></Skills>
    </div>
        );
}

export default App;
