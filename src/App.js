import React,{useEffect,useCallback,useState} from "react"
import logo from './logo.svg';
import './App.css';
import {SecondsTohhmmss} from './utils'
import CountdownTimer from './CountdownTimer';
import SelectSearch from 'react-select-search';
import 'react-select-search/style.css'
let offset = null, interval = null


function App() {
  // const [minutes, setMinutes] = useState(0); 
  // const [seconds, setSeconds] = useState(0); 


  const options = [
    {name: 'Swedish', value: 'sv'},
    {name: 'English', value: 'en'},
   
];

  
  const displayTimer = (timeInSeconds, id = '') => {
    let timerId;
    let timer = new Date()
    timer.setSeconds(timer.getSeconds() + timeInSeconds)
    let total;
    let seconds;
    let minutes;


    timerId = window.setInterval(function () {
      total = Date.parse(timer) - Date.parse(new Date());
       minutes= Math.floor((total / 1000 / 60) % 60);
       seconds = Math.floor((total / 1000) % 60);

      
      const elem = document.getElementById('otpCountDownTimer');
      if (elem === null) {
        clearInterval(timerId);
      }
      elem.innerHTML =
        'OTP will expire in ' + minutes + ':' + seconds;

      if (total<= 0) {
        // setDisplayTime(false);
        elem.innerHTML = `OTP expired! Please click on <span style="font-weight:600">RESEND OTP</span> to generate a new OTP.`; //SAFD - 129719 - Gayathri - 21-jan-22
        clearInterval(timerId);
      }
    }, 1000);
  };
  const NOW_IN_MS = new Date().getTime();
  const dateTimeAfterThreeDays = NOW_IN_MS + 180000;
  return (
    <div className="App">
     
      
      <header className="App-header">
      <SelectSearch options={options} value="sv" name="language" placeholder="Choose your language" />
        {/* <span  onClick={()=>{resetTimer()}}>Resend OTP ({timer})</span> */}
          <span className="font-12 orange orange-link">
            <button onClick={()=>{displayTimer(180)}}>start</button>
          <span id="otpCountDownTimer" />{" "}
          <span>Time:17:29</span>
          {/* <button onClick={()=>{play()}}>click start</button>
          <h3  className="seconds"> {tiime}</h3> */}
          {/* <h3>{`${minutes}:${seconds}`}</h3> */}
        </span>
        <div>
      {/* <h1>Countdown Timer</h1>
      <CountdownTimer targetDate={dateTimeAfterThreeDays} /> */}
    </div>
      </header>
    </div>
  );
}

export default App;
