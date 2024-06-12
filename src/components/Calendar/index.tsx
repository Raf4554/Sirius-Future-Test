// src/WeeklyCalendar.tsx
import React, { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { startOfWeek, addWeeks, format, eachDayOfInterval, endOfWeek, addDays } from 'date-fns';
// import './WeeklyCalendar.css';
import { ru } from 'date-fns/locale';
import Style from '../Calendar/Calendar.module.css'
import QuestionsIcon from '../../img/CustemSvg/Questions';
import StrelkaIcon from '../../img/svg/Strelka.svg';
import Lesson from '../lesson/insdex';
const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вc'];

const WeeklyCalendar: React.FC= () => {
  


  const [currentWeek, setCurrentWeek] = useState(new Date());
  const {TableHead,Table,TableHead_tr,dayBox,tBody,tuday,icon,SwiperSEction}=Style
  const startOfCurrentWeek = startOfWeek(currentWeek, { weekStartsOn: 0 });
  const weeks = Array.from({ length: 5 }, (_, i) => eachDayOfInterval({
    start: addDays(startOfCurrentWeek, i * 7),
    end: endOfWeek(addDays(startOfCurrentWeek, i * 7), { weekStartsOn: 0 }),
  }));

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentWeek(addWeeks(currentWeek, 1)),
    onSwipedRight: () => setCurrentWeek(addWeeks(currentWeek, -1)),
  });

  return (
<>
<div className={SwiperSEction}>
                <div>
                    <button onClick={() => setCurrentWeek(addWeeks(currentWeek, -1))} style={{border:"none"}}><img src={StrelkaIcon} alt="" style={{rotate:'180deg'}}  /></button>
                    <h3>{format(startOfCurrentWeek, 'MMMM yyyy', { locale: ru })}</h3>
                    <button onClick={() => setCurrentWeek(addWeeks(currentWeek, 1))} style={{border:"none"}}><img src={StrelkaIcon} alt="" /></button>
                </div>
                <div>
                    <button className={tuday}>Сегодня</button>
                    <QuestionsIcon isActive={false} className={icon}/>
                </div>
                

            </div>
                
                <div {...handlers} className="weekly-calendar">
  
      <table className={Table} >
        <thead>
          <tr className={TableHead}>
            {daysOfWeek.map((day) => (
              <th key={day} className={TableHead_tr}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody className={tBody}>
          {weeks.map((week, weekIndex) => (
            <tr key={weekIndex}>
              {week.map((day:any) => (
                <td key={day.toISOString()} className={dayBox}>
                    <p>{format(day, 'd')}</p>
                    {format(day, 'd')==="1" &&<Lesson variant={1}/>}
                    {format(day, 'd')==="4" &&<Lesson variant={1}/>}
                    {format(day, 'd')==="9" &&<Lesson variant={1}/>}
                    {format(day, 'd')==="15" &&<Lesson variant={1}/>}
                    {format(day, 'd')==="27" &&<Lesson variant={1}/>}
                    {format(day, 'd')==="7" &&<Lesson variant={1}/>}
                    {format(day, 'd')==="7" &&<Lesson variant={1}/>}
                    {format(day, 'd')==="20" &&<Lesson variant={1}/>}
                    {format(day, 'd')==="25" &&<Lesson variant={1}/>}
                    {format(day, 'd')==="1" &&<Lesson variant={3}/>}
                    {format(day, 'd')==="4" &&<Lesson variant={3}/>}
                    {format(day, 'd')==="9" &&<Lesson variant={3}/>}
                    {format(day, 'd')==="25" &&<Lesson variant={3}/>}

                    {format(day, 'd')==="3" &&<Lesson variant={2}/>}
                    {format(day, 'd')==="3" &&<Lesson variant={2}/>}
                    {format(day, 'd')==="5" &&<Lesson variant={2}/>}
                    {format(day, 'd')==="10" &&<Lesson variant={2}/>}
                    {format(day, 'd')==="15" &&<Lesson variant={2}/>}
                    {format(day, 'd')==="20" &&<Lesson variant={2}/>}
                    {format(day, 'd')==="30" &&<Lesson variant={2}/>}

                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
</>
 
  );
};

export default WeeklyCalendar;
