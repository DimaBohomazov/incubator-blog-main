import React, {Fragment} from 'react';
import Routes from '../../routes'
import Header from "../Header";
import Footer from "../Footer";
import '../../assets/stylesheets/index.scss'
import {connect} from "react-redux";

const App = (props) => {
  return (
    <Fragment>
      {props.isLoggedIn && <Header />}
      <Routes />
      {props.isLoggedIn && <Footer />}
    </Fragment>
  );
};
const mapStateToProps = state => {
  return {
    isLoggedIn: state.user.isLoggedIn
  }
}


export default connect(mapStateToProps)(App);