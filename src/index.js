import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './App.css';
import App from './App';
import { HashRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <App />
  </Router>
  , document.getElementById('root'));
