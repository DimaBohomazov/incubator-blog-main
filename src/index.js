import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import './assets/stylesheets/index.css'
import Routes from './routes'
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => (
  <BrowserRouter>
    <Header/>
    <Routes/>
    <Footer/>
  </BrowserRouter>
)


ReactDOM.render(<App />, document.getElementById('root'));

