import React from 'react';
import * as s from './Authentication.module.scss';
import './../../cssVariables/variables.css'

const Authentication = () => {

  return (
    <div className={s.reg__container}>
      <h1 className={s.reg__title}>Learn and develop with IncubatorBlog </h1>
      <div className={s["wrapper"]}>
      
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
          
          <input type="submit" className={s.input__send}id="send-btn" value="Agree & Join"/>
        </form>

        <p className={s["sign-in__line"]}>Already on IncubatorBlog? <a href="https://incubatorblog.net/login" className={s.reg__link}> Sign in</a></p>
      
      </div>
                
    </div>
  );
};

export default Authentication;