import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return <header className={classes.header}>
    <img src = 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' />
      <div className={classes.loginBlock}>
        {props.isAuth
              ? <div>{props.login} - <buttnon onClick={props.logout}>Log out</buttnon> </div>
              : <NavLink to={'/login'}>Login</NavLink>}
      </div>
  </header>
}

export default Header;