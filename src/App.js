import React,{useEffect,useCallback,useState} from "react"
import logo from './logo.svg';
import './App.css';
import {SecondsTohhmmss} from './utils'


let offset = null, interval = null


function App() {
  const [minutes, setMinutes] = useState(0); 
  const [seconds, setSeconds] = useState(0); 




  
  const displayTimer = (timeInSeconds, id = '') => {
    let timerId;
    var timer = timeInSeconds,
      minutes,
      seconds;
    timerId = window.setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;
      setMinutes(minutes)
      setSeconds(seconds)
      const elem = document.getElementById('otpCountDownTimer');
      if (elem === null) {
        clearInterval(timerId);
      }
      elem.innerHTML =
        'OTP will expire in ' + minutes + ':' + seconds;

      if (--timer < 0) {
        // setDisplayTime(false);
        elem.innerHTML = `OTP expired! Please click on <span style="font-weight:600">RESEND OTP</span> to generate a new OTP.`; //SAFD - 129719 - Gayathri - 21-jan-22
        clearInterval(timerId);
      }
    }, 1000);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      
        {/* <span  onClick={()=>{resetTimer()}}>Resend OTP ({timer})</span> */}
          <span className="font-12 orange orange-link">
            <button onClick={()=>{displayTimer(180)}}>start</button>
          <span id="otpCountDownTimer" />{" "}
          <span>Time:17:29</span>
          {/* <button onClick={()=>{play()}}>click start</button>
          <h3  className="seconds"> {tiime}</h3> */}
          <h3>{`${minutes}:${seconds}`}</h3>
        </span>
        <countDown></countDown>
      </header>
    </div>
  );
}

export default App;
