import React, { useState } from 'react';
import Style from '../Timer/Timer.module.css'
function Timer() {
    let [minutes,setminutes]=useState(59)

    const {Lessontime,Num,day,Button}=Style
  
    setTimeout(() => {
        setminutes(prew=>prew-1)
      }, 60000);
    return (
        <div className={Lessontime}>
                    <h2>Следующее занятие начнется через:</h2>
                    <div>
                        <div>
                            <h1 className={Num}>6</h1>
                            <p className={day}>д</p>
                        </div>
                        
                        <div>
                            <h1 className={Num}>12</h1>
                            <p className={day}>ч</p>
                        </div>

                        <div>
                            <h1 className={Num}>{minutes}</h1>
                            <p className={day}>м</p>
                        </div>
                    </div>
                    <button className={Button}>Button</button>
                </div>
    );
}

export default Timer;