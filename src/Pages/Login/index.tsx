import React, { useState } from 'react';
import style from '../Login/Login.module.css'
import Mainicon from '../../img/svg/MainIcon.svg'
import LoginForm from '../../components/LoginForm';
import { Link } from 'react-router-dom';
import 'reset-css';
function Login() {
    let {body,logInform,mainIcon,Title,link,linkDiv,registerDiv,NoAk,languegeDiv,ActiveLanguege,DeActiveLanguege ,Li}=style
    let [Languege,setLanguege]=useState(true)
    
    return (
        <div className={body}>
            <div className={logInform}>
                    <img src={Mainicon} alt="" className={mainIcon} />
                    <h2 className={Title}>{Languege?"Вход в Sirius Future":"Login to Sirius Future "}</h2>
                    <LoginForm Languege={Languege}/>
                    <div className={linkDiv}>
                        <Link className={Li} to="/" ><p className={link}>{Languege?"Я забыл пароль":"I forgot password"}</p></Link>
                        <Link className={Li} to="/Home" ><p className={link}>{Languege?"Войти как тренер":"Login as a coach"}</p></Link>
                    </div>
                    <div className={registerDiv}>
                        <h4 className={NoAk}>{Languege?"Нет аккаунта?":"Don't have an account?"}</h4>
                        <Link className={Li} to="/" ><p className={link}>{Languege?"Зарегистрироваться":"Register"}</p></Link>
                    </div>
                    <div className={languegeDiv}>
                        <h5 className={Languege?ActiveLanguege:DeActiveLanguege} onClick={()=>setLanguege(true)}>RU</h5>
                        <h5 className={!Languege?ActiveLanguege:DeActiveLanguege} onClick={()=>setLanguege(false)}>EN</h5>
                    </div>
            </div>
       
        </div>
    );
}

export default Login;