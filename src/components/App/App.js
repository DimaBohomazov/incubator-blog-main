import React from 'react';
import './App.css';
import Header from "../Header";
import Navbar from "../Navbar";
import MainContent from "../MainContent";
import RandomContent from "../RandomContentBlock";
import Footer from "../Footer";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <MainContent/>
            <RandomContent/>
            <Footer/>
        </div>
    );
};

export default App;
