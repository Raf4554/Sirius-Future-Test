import React, { useState } from 'react';

import Layout from '../../components/Layout';
import Style from '../Home/Home.module.css'
import DogIcon from '../../img/svg/Dog.svg'
import Profile from '../../img/svg/profile.svg'
import Timer from '../../components/Timer';
import 'reset-css';

function Home() {
    const {InfoSection1,Sale,unsowedDiv,body,INfoSectin2,INfoBox,Lessondiv,Lesons,Button,InfoBox2,dayDiv,DAY,NEarestLessons,LessonTime,TeacherName,Button1,Button2,widt288,widt344,BUttomDiv,BorderNone}=Style
    return (
        <Layout active={true} >
            <div className={body}>
            <section className={InfoSection1}>
                <div className={Sale}>
                    
                    <h2>До 31 декабря любой курс со скидкой 20%</h2>
                    <p>До конца года у вас есть уникальная возможность воспользоваться нашей новогодней скидкой 20% на любой курс!</p>
                    <img src={DogIcon} alt="" />
                </div>
                <Timer/>
                <div  className={unsowedDiv}>

                </div>
            </section>
            <section className={INfoSectin2}> 
                <div className={INfoBox}>
                    <h3>Баланс занятий</h3>
                    <div className={Lesons}>
                        <div className={Lessondiv}>
                            <p>Ментальная Арифметика</p>
                            <div>32 </div>
                        </div>
                        
                        <div className={Lessondiv}>
                            <p>Ментальная Арифметика</p>
                            <div>32 </div>
                        </div>
                        
                        <div className={Lessondiv}>
                            <p>Ментальная Арифметика</p>
                            <div>32 </div>
                        </div>
                        <div className={Lessondiv}>
                            <p>Ментальная Арифметика</p>
                            <div>32 </div>
                        </div>
                        <div className={Lessondiv}>
                            <p>Ментальная Арифметика</p>
                            <div>32 </div>
                        </div>
                    </div>
                    <button className={Button+' '+widt288}>Button</button>
                   
                </div>
                <div className={InfoBox2}>
                    <h2>Ближайшие уроки</h2>
                        <div>
                            <div className={NEarestLessons} style={{marginTop:'1rem'}}>
                            <div className={dayDiv}>
                                <h3 className={DAY}>1</h3>
                                <p>мая</p>
                            </div>
                            <div>
                                <h4>Ментальная Арифметика</h4>
                            </div>
                            
                            <div>
                                <h5 className={LessonTime}>14:00-14:25</h5>
                                <img src={Profile} alt="" />
                                <h5 className={TeacherName}>Белкина Инна</h5>
                            </div>
                            <div>
                                <button className={Button1}>Button</button>
                                <button className={Button2}>Button</button>
                            </div>
                            
                            </div>
                            <div className={NEarestLessons} >
                                <div className={dayDiv}>
                                    <h3 className={DAY}>1</h3>
                                    <p>мая</p>
                                </div>
                                <div>
                                    <h4>Ментальная Арифметика</h4>
                                </div>
                                
                                <div>
                                    <h5 className={LessonTime}>14:00-14:25</h5>
                                    <img src={Profile} alt="" />
                                    <h5 className={TeacherName}>Белкина Инна</h5>
                                </div>
                                <div>
                                    <button className={Button1}>Button</button>
                                    <button className={Button2}>Button</button>
                                </div>
                                
                            </div>
                            <div className={NEarestLessons}  style={{border:"none"}}>
                                <div className={dayDiv}>
                                    <h3 className={DAY}>1</h3>
                                    <p>мая</p>
                                </div>
                                <div>
                                    <h4>Ментальная Арифметика</h4>
                                </div>
                                
                                <div>
                                    <h5 className={LessonTime}>14:00-14:25</h5>
                                    <img src={Profile} alt="" />
                                    <h5 className={TeacherName}>Белкина Инна</h5>
                                </div>
                                <div>
                                    <button className={Button1}>Button</button>
                                    <button className={Button2}>Button</button>
                                </div>
                                
                            </div>
                        </div>
                    
                    <div className={BUttomDiv}>
                        <button className={Button+' '+widt344}>Button</button>
                    </div>
                    
                </div>
            </section>
            </div>
            
        </Layout>
    );
}

export default Home;