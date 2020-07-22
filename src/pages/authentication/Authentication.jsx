import React from 'react';
import * as s from './Authentication.module.scss';
import '../../assets/stylesheets/variables.css'
import {Link, Redirect} from "react-router-dom";
import {loggedIn} from "../../store/actions/user";
import {connect} from "react-redux";

const Authentication = ({isLoggedIn, loggedIn}) => {
  if (isLoggedIn) {
    return <Redirect to='/' />
  }
  return (
    <div className={s.reg__container}>
      <h1 className={s.reg__title}>Learn and develop with IncubatorBlog</h1>
      <div className={s["wrapper"]}>
        <button
          className={s.input__send}
          onClick={loggedIn}
        >
          Enter
        </button>
        <form action="">
          <label htmlFor="name" className={s.reg__label}>Your Name</label>
          <input className={s.input__name} required="" id="name" type="text" name="user-name" placeholder="" defaultValue=""/>
          
          <label htmlFor="last-name" className={s.reg__label}>Your Last Name</label>
          <input className={s["input__last-name"]} required="" id="last-name" type="text" name="user-last-name" placeholder="" defaultValue=""/>
          
          <label htmlFor="e-mail" className={s.reg__label}>Email</label>
          <input className={s.input__email} required="" id="email-address" type="email" name="email-address" placeholder="" defaultValue=""/>
          
          <label htmlFor="password" className={s.reg__label}>Password (6 or more characters)</label>
          <input className={s.input__password} autoComplete="new-password" required="" id="password" type="password" name="password" placeholder="" defaultValue=""/>
          
          <label htmlFor="password--again" className={s.reg__label}>Password again, please</label>
          <input className={s.input__password} autoComplete="new-password" required="" id="password--again" type="password" name="password--again" placeholder="" defaultValue=""/>
          
          <p className={s.reg__policy}>By clicking Agree & Join, you agree to the IncubatorBlog User Agreement, Privacy Policy, and Cookie Policy.</p>
          
          <input type="submit" className={s.input__send} id="send-btn" value="Agree & Join"/>
        </form>

        <p className={s["sign-in__line"]}>Already on IncubatorBlog? <Link to="/register" className={s.reg__link}> Sign in</Link></p>
      
      </div>
                
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
    loggedIn: () => dispatch(loggedIn())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);