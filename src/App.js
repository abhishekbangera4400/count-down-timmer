import React from "react"
import logo from './logo.svg';
import './App.css';
import './main.css';
import './style.css';
import SelectSearch from './ReactSelectSearch';
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
     
      
      {/* <header className="App-header"> */}
      
        {/* <span  onClick={()=>{resetTimer()}}>Resend OTP ({timer})</span> */}
          {/* <span className="font-12 orange orange-link"> */}
          {/* <SelectSearch options={options} value="sv" name="language" placeholder="Choose your language" /> */}
          
          <div className="section-details main-page d-flex center-all4 w-86 custom-background-color " >
          <div className="details-sub w-100">
          <div className="fillForm_manual">
          <div className="form">
          <div className="grid-container">
          <div className="grid-item undefined">



<div className="column-3" >
<div className="input-container" >
<label className='label-text mb-0 mr-2'>
                      <span style={{ color: 'red', fontSize: 12 }}>*</span>
                      Occupation
                      </label>
<div
                      className='custom-select-search custom-upload-inputs custom-color-orange'
                      id={"hsgdg"}
                      onClick={async () => {""
                      }}
                    >
                     
          <SelectSearch
                        search
                        options={options}
                        disabled={false}
                        value={''}
                        placeholder={"its my life"}
                        // disabled={occupation.value === ''}
                        style={{ fontSize: '12px' }}
                        // onChange={e => onChangeText(e, occupation.id, occupation.gtm_id)}
                        // id={`${CONST_NAME.ID}${occupation.id}`}
                      />
                      </div>
                       </div>
                      </div>
                      </div>
                      </div>
                      </div>
                      </div>
                      </div>
                      </div>

                      






            <button onClick={()=>{displayTimer(180)}}>start</button>
          <span id="otpCountDownTimer" />{" "}
          <span>Time:17:29</span>
          {/* <button onClick={()=>{play()}}>click start</button>
          <h3  className="seconds"> {tiime}</h3> */}
          {/* <h3>{`${minutes}:${seconds}`}</h3> */}
        {/* </span> */}
        <div>
      {/* <h1>Countdown Timer</h1>
      <CountdownTimer targetDate={dateTimeAfterThreeDays} /> */}
    </div>
      {/* </header> */}
    </div>
  );
}

export default App;
