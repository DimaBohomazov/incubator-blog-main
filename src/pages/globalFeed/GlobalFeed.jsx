import React from 'react';
import MainContent from "../../components/MainContent";
import RandomContent from "../../components/RandomContentBlock";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {Link} from "react-router-dom"

const GlobalFeed = () => {
  return (
    <div>
      <Header />
      <Link to='/login'>Login</Link> &nbsp;
      <Link to='/register'>Registration</Link>
      <MainContent />
      <RandomContent />
      <Footer />
    </div>
  );
};

export default GlobalFeed;