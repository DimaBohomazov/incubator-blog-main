import React from 'react';
import MainContent from "../../components/MainContent";
import RandomContent from "../../components/RandomContentBlock";

import {Redirect} from "react-router-dom"
import {connect} from "react-redux";
import {loggedOut} from "../../store/actions/user";

const GlobalFeed = ({isLoggedIn, loggedOut}) => {
  if (!isLoggedIn) {
    return <Redirect to='/login' />
  }
  return (
    <div>
      <button
        onClick={loggedOut}
      >
        Log Out
      </button>
      <MainContent />
      <RandomContent />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.user.isLoggedIn
  }
}
const mapDispatchToProps = dispatch => {
  return {
    loggedOut: () => dispatch(loggedOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GlobalFeed);