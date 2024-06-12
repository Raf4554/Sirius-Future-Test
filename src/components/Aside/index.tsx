import React, { useState } from 'react';
import style from '../Aside/Aside.module.css'
import Logo from '../../img/svg/Logo.svg'
import Gift from '../../img/svg/gift.svg'
import NavEL from '../NavEl';
import 'reset-css';

import Icons from '../../Constant/Icons';
import { useNavigate, useParams } from 'react-router-dom';
function Aside({active}:any) {
    const {Aside,logo,NAvBar,infoBox,InfoTitle,InfoDesc,infobtn,gift}:any=style
// let [activePage,SetactivePage]=useState(active)
let navigate=useNavigate()
    return (
        <aside className={Aside}>
            <img src={Logo} alt="" className={logo} />
            <nav className={NAvBar}>
                <NavEL isACtive={active} Title='Главная' Icon={Icons.Home} Onclick={()=>{
                    
                    navigate('/'+Icons.Home)
                }}/>
                <NavEL isACtive={!active} Title='Расписание' Icon={Icons.Calendar} Onclick={()=>{
                    
                    navigate('/'+Icons.Calendar)
                }}/>
                <NavEL isACtive={!true} Title='Оплата' Icon={Icons.Peyment}/>
                <NavEL isACtive={!true} Title='Достижения' Icon={Icons.Achievements}/>
                <NavEL isACtive={!true} Title='Тренажеры' Icon={Icons.Trainer}/>
                <NavEL isACtive={!true} Title='Библиотека' Icon={Icons.Library}/>
                <NavEL isACtive={!true} Title='Проверка связи' Icon={Icons.connection}/>
                <NavEL isACtive={!true} Title='Настройки' Icon={Icons.Settings}/>
                <NavEL isACtive={!true} Title='Вопросы' Icon={Icons.Questions}/>    
            </nav>
            <div className={infoBox}>
                <h4 className={InfoTitle}>Учитесь бесплатно</h4>
                <p className={InfoDesc}>Приводите друзей с детьми заниматься в Sirius Future 
                и получайте подарки!</p>
                <button className={infobtn}>Узнать</button>
                <img src={Gift} alt="" className={gift} />
            </div>
        </aside>
    );
}

export default Aside;