import React, {useState, useEffect } from 'react'

function DigitalClock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date())
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = () => {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let meridian = hours > 12 ? "PM" : "AM";
    hours = hours % 12 || 0;

  return `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds} ${meridian}`;
  }

  return (
    <div className="clock-container">
      <p>
        {formatTime()}
      </p>
    </div>
  )
}

export default DigitalClock;
