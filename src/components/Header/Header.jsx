import { React } from 'react'
import s from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src="https://img2.freepng.ru/20180426/zwq/kisspng-hewlett-packard-logo-hewlett-packard-enterprise-hp-laptop-5ae168d447ca66.8372165515247218762941.jpg"></img>
      <div className={s.loginBlock}>
        {props.isAuth
          ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
          : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  )
}

export default Header
