import { ErrorMessage, Field } from 'formik';
import React, { useState } from 'react';
import style from '../LoginInp/input.module.css'
import ayeIcon from '../../img/svg/ayeIcon.svg'
import OenAyeIcon from '../../img/svg/ayeOpen.svg'

interface Props{
    placeholder:string;
    name:string;
    isPassword:boolean,
    }
function Inp(Props:Props) {
    let {placeholder,name,isPassword,}=Props
    let [Show,setShow]=useState<boolean>(!isPassword)
    return (
        <div>
            <div className={style.inpDiv}>
                <Field
                type={Show?"text":'password'} 
                id={name} 
                name={name}  
                className={style.INP} 
                placeholder={placeholder}
                
               
                />
                <img style={isPassword?{display:'block'}:{display:'none'} }className={style.aye} src={ Show?OenAyeIcon:ayeIcon} alt="" onClick={()=>setShow(prew=>!prew)}  />
                
            </div>
            <ErrorMessage name={name} component="div" className="error" />
        </div>
    );
}

export default Inp;