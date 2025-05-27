
import React, { useState } from 'react';
import './App.css';

function App() {
    const [age, setAge] = useState(null);
    const [dateTime, setDateTime] = useState('');
    const [isValid,setIsValid] = useState();

    const calAge = (event) => {
        event.preventDefault();
        const ipDateTime = new Date(dateTime);
        const now = new Date();
        if(isNaN(ipDateTime.getTime())) {
            setAge('date/time format');
            setIsValid(false);
            return;
        }
        setIsValid(true);
        const ageInMilli = now-ipDateTime;
        const ageInSec = ageInMilli/1000;
        const ageInMin = ageInSec/60;
        const ageInHr = ageInMin/60;
        const ageInDay = ageInHr/24;
        const ageInYr = ageInDay/365.25;
        setAge(`${Math.floor(ageInYr)} years, ${Math.floor(ageInDay%365.25)} days, ${Math.floor(ageInHr%24)} hours,${Math.floor(ageInMin%60)} minutes, ${Math.floor(ageInSec%60)} seconds`);
        setDateTime('');
    }
    return (
        <div className="App">
            <div className='container'>
                <h1>Age Calculator</h1>
                <form className='form' onSubmit={calAge}>
                    <p>Enter your date and time of birth:</p>
                    <label htmlFor="datetime-local">Date and Time:</label>
                    <input type="datetime-local" value={dateTime} onChange={(e)=>{setDateTime(e.target.value)}}/>
                    <input type="submit" value="Calculate Age" />
                </form>
                {isValid && <div className='res'><b>Age: </b>{age}</div>}
                {!isValid && <div className='res'><b>Invalid </b>{age}</div>}
            </div>
        </div >
    );
}

export default App;
