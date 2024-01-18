import React, {useState, useEffect } from 'react'

function DigitalClock() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  return (
    <div className="clock-container">
      <p>
        {hours < 9 ? `0${hours}` : hours}:
        {minutes < 9 ? `0${minutes}` : minutes}:
        {seconds < 9 ? `0${seconds}` : seconds}:
        {true ? " PM" : " AM"}
      </p>
    </div>
  )
}

export default DigitalClock;
