import React from 'react';

// import styles from './Authentication.module.scss';
import * as s from './Authentication.module.scss';
// import variables from './../../cssVariables/variables.css'
import './../../cssVariables/variables.css'

// --header - bg - color: #2D3E49;
// --logo - bg: #3072AC;


const Authentication = () => {

  // console.log("variables = ", variables);
  // console.log("styles = ", styles);

  // const {border, background} = styles;

  return (
    <div className={s.reg__container}>
      {/* <h1 className="reg-title">Learn and develop with IncubatorBlog </h1>*/}
      <h1 className={s.reg__title}>Learn and develop with IncubatorBlog </h1>
      <div className={s["wrapper"]}>
      
        <form action="">
          {/* "reg_user.php" */}
          <label htmlFor="name" className={s.reg__label}>Your Name</label>
          <input className={s.input__name} required="" id="name" type="text" name="user-name" placeholder="" defaultValue=""/>
          
          <label htmlFor="last-name" className={s.reg__label}>Your Last Name</label>
          <input className={s["input__last-name"]} required="" id="last-name" type="text" name="user-last-name" placeholder="" defaultValue=""/>
          
          <label htmlFor="e-mail" className={s.reg__label}>Email</label>
          <input className={s.input__email} required="" id="email-address" type="email" name="email-address" placeholder="" defaultValue=""/>
          
          <label htmlFor="password" className={s.reg__label}>Password (6 or more characters)</label>
          <input className={s.input__password} autoComplete="new-password" required="" id="password" type="password" name="password" placeholder="" defaultValue=""/>
          
          <p className={s.reg__policy}>By clicking Agree & Join, you agree to the IncubatorBlog User Agreement, Privacy Policy, and Cookie Policy.</p>
          
          <input type="submit" className={s.input__send}id="send-btn" value="Agree & Join"/>
        </form>

        <p className={s["sign-in__line"]}>Already on IncubatorBlog? <a href="https://incubatorblog.net/login" className={s.reg__link}> Sign in</a></p>
      
      </div>
                
    </div>
  );
};

export default Authentication;