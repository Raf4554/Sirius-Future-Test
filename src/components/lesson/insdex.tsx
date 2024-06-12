import React from 'react';
import style from '../lesson/Lesoon.module.css'
import walletIcon from '../../img/svg/Wallet.svg'
interface Props{
    variant:1|2|3
}
function Lesson(props:Props) {
    const{variant}=props
    const {LessonBox,BgGreen,BorderREd,BgPurple}=style
    if(variant===1){
        return (
            <div className={LessonBox+" "+BgGreen}>
                <h5>13:00-13:45</h5>
                <p>Ментальная арифметика</p>
                <img src={walletIcon} alt="" />
            </div>
        );
    }
    if(variant===2){
        return (
            <div className={LessonBox+" "+BorderREd}>
                <h5>13:00-13:45</h5>
                <p>Ментальная арифметика</p>
                <img src={walletIcon} alt="" />
            </div>
        );
    }
    if(variant===3){
        return (
            <div className={LessonBox+" "+BgPurple}>
                <h5>13:00-13:45</h5>
                <p>Ментальная арифметика</p>
                
            </div>
        );
    }
}

export default Lesson;