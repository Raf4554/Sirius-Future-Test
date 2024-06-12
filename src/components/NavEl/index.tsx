import React from 'react';
import style from "../NavEl/NavEl.module.css"
import HomrIcon from "../../img/CustemSvg/HomeIcon"
import CalendarIcon from "../../img/CustemSvg/Calendar"
import PeymentIcon from "../../img/CustemSvg/Peyment"
import LibraryIcon from "../../img/CustemSvg/Library"
import QuestionsIcon from "../../img/CustemSvg/Questions"
import SettingsIcon from "../../img/CustemSvg/Settings"
import TrainerIcon from "../../img/CustemSvg/Trainer"
import ConnectionIcon from "../../img/CustemSvg/connection"
import ActiveCalendar from "../../img/svg/ActiveCalendar.svg"
import Icons from '../../Constant/Icons'
import { useNavigate } from 'react-router-dom';
interface Props{
    Title:string,
    Icon:string,
    isACtive:boolean,
    Onclick?:any
}
function NavEL(props:Props) {
    let navigate=useNavigate()
    const {Title,Icon,isACtive,Onclick=()=>console.log("click") }=props
    const {Div,icon,titleACtive,Active,titleDeACtive}=style


    switch (Icon) {
        case Icons.Home:
            return (
                <div className={isACtive?Active+' '+Div:Div} 
                onClick={()=>{
                    
                    Onclick()
                    
                    }}>
                        
                        
                   <HomrIcon isActive={isACtive} className={icon}/>
                  <h4 className={isACtive?titleACtive:titleDeACtive}>{Title}</h4>
                </div>
            );
          
        case Icons.Calendar:
            return (
                <div className={isACtive?Active+' '+Div:Div}
                 onClick={()=>{
                    
                    Onclick()
                    
                    }}>
                        {isACtive?<img src={ActiveCalendar} className={icon} alt="" />:<CalendarIcon isActive={isACtive} className={icon} />}
                   
                  <h4 className={isACtive?titleACtive:titleDeACtive}>{Title}</h4>
                </div>
            );
        case Icons.Peyment:
            return (
                <div className={isACtive?Active+' '+Div:Div} >
                   <PeymentIcon isActive={isACtive} className={icon}/>
                  <h4 className={isACtive?titleACtive:titleDeACtive}>{Title}</h4>
                </div>
           );
        
           case Icons.Library:
            return (
                <div className={isACtive?Active+' '+Div:Div} >
                   <LibraryIcon isActive={isACtive} className={icon}/>
                  <h4 className={isACtive?titleACtive:titleDeACtive}>{Title}</h4>
                </div>
           );

           case Icons.Questions:
            return (
                <div className={isACtive?Active+' '+Div:Div} >
                   <QuestionsIcon isActive={isACtive} className={icon}/>
                  <h4 className={isACtive?titleACtive:titleDeACtive}>{Title}</h4>
                </div>
           );

           case Icons.Settings:
            return (
                <div className={isACtive?Active+' '+Div:Div} >
                   <SettingsIcon isActive={isACtive} className={icon}/>
                  <h4 className={isACtive?titleACtive:titleDeACtive}>{Title}</h4>
                </div>
           );

           case Icons.Trainer:
            return (
                <div className={isACtive?Active+' '+Div:Div} >
                   <TrainerIcon isActive={isACtive} className={icon}/>
                  <h4 className={isACtive?titleACtive:titleDeACtive}>{Title}</h4>
                </div>
           );

           case Icons.connection:
            return (
                <div className={isACtive?Active+' '+Div:Div} >
                   <ConnectionIcon isActive={isACtive} className={icon}/>
                  <h4 className={isACtive?titleACtive:titleDeACtive}>{Title}</h4>
                </div>
           );
        

      }

}

export default NavEL;