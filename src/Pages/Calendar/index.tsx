import React, { useState } from 'react';
import Layout from '../../components/Layout';
import Style from '../Calendar/Calendar.module.css'
import StrelkaIcon from '../../img/svg/Strelka.svg'
import QuestionsIcon from '../../img/CustemSvg/Questions';
import WeeklyCalendar from '../../components/Calendar';
function Calendar() {
   
    const {body,HeaderButtom,Sellect,Sellect_option,tuday,icon}=Style
    
    return (
        
        <div>
         <Layout active={false}>
            <div className={body}>
                <div className={HeaderButtom}>
                <select  className={Sellect}>
                    <option className={Sellect_option} >Выбрать предмет</option>
                    <option className={Sellect_option} >variant1</option>
                    <option className={Sellect_option} >variant2</option>
                    <option className={Sellect_option} >variant3</option>
                </select>
                    <button>Изменить расписание</button>
                </div>
            
            <WeeklyCalendar
           
            />
            </div>
            
            </Layout> 
        </div>
    );
}

export default Calendar;