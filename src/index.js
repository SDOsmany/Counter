import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const Counter = props =>{
  return (<div className="fullCounter">
    <div className="clock-icon">
        <img
          src="https://icons-for-free.com/iconfiles/png/512/clock+galaxy+mobile+schedule+time+timetable+icon-1320183046319691941.png"
          alt="timer"
          height="60px"
        />
      </div>
          <div className="fourth">{props.fourth % 10}</div>
          <div className="third">{props.third % 10}</div>
          <div className="second">{props.second % 10}</div>
          <div className="first">{props.first % 10}</div>

  </div>)
}
let counter = 0;
setInterval(()=>{
  const first = counter
  const second = Math.floor(counter/10)
  const third = Math.floor(counter/100)
  const fourth = Math.floor(counter/1000)
  counter++;
  ReactDOM.render(
    <React.StrictMode>
      <Counter first = {first} second={second} third={third} fourth={fourth}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
},1000)



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
