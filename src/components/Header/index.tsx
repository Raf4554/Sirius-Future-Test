import React, { useState } from 'react';
import 'reset-css';

import Style from '../Header/header.module.css'
import ChatIcon  from '../../img/svg/chat.svg'
import mixailIcon  from '../../img/svg/mixail.svg'
import AnnaIcon  from '../../img/svg/Anna.svg'
import cgangeprofileIcon  from '../../img/svg/cgangeprofile.svg'
import LogouthIcon  from '../../img/svg/Logouth.svg'
import CloseIcon  from '../../img/svg/X.svg'
import TriangleIcon  from '../../img/svg/Triangle.svg'
import { useNavigate } from 'react-router-dom';
function Header() {

    let navidate=useNavigate()
    const {Header,IconDiv,Title,Span,userDiv,user,userbtn,line,ActiveUser,Close,traingle} =Style
    let [User,setUser]=useState(true)
    let [IsOpen,setIsOpen]=useState(false)
    return (
        <div className={Header}>
            <h3 className={Title}>Добро пожаловать,<span className={Span}>{User?"Михаил!":"Анна!"}</span> </h3>
            <div className={IconDiv}>
                <img src={ChatIcon} alt="" />
                <img src={User?mixailIcon:AnnaIcon} alt="" />

                <img src={cgangeprofileIcon} alt="" onClick={()=>setIsOpen(prew=>!prew)} style={IsOpen?{rotate:"180deg"}:{}}/>
            </div>
            <div className={userDiv} style={IsOpen?{display:"block"}:{display:'none'}}>
                <img src={CloseIcon} alt=""  className={Close} onClick={()=>setIsOpen(false)}/>
                <img src={TriangleIcon} alt="" className={traingle}/>

                <h3>Смена пользователя</h3>
                <div className={user +' '+ActiveUser} >
                    
                    <img src={User?mixailIcon:AnnaIcon} alt="" />
                    <div>
                        <h4>{User?"Михаил":"Анна"}</h4>
                        <p>Это вы</p>
                    </div>
                </div>
                <div className={user} onClick={()=>setUser(prew=>!prew)}>
                    
                    <img src={!User?mixailIcon:AnnaIcon} alt="" />
                    <div>
                        <h4>{!User?"Михаил":"Анна"}</h4>
                       
                    </div>
                    
                </div>
                <div className={line}></div>
                <button className={userbtn} onClick={()=>navidate("/")}>
                    <p>Выход</p>
                    <img src={LogouthIcon} alt="" />
                </button>
            </div>
        </div>
    );
}

export default Header;