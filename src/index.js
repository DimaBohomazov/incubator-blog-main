import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import './assets/stylesheets/index.css'
import Routes from './routes'

const App = () => (
  <BrowserRouter>
    <Routes/>
  </BrowserRouter>
)


ReactDOM.render(<App />, document.getElementById('root'));

