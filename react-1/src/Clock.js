import React, { useState } from 'react'

function Clock() {
    const [time, settime] = useState();

    setInterval(() => {
        let a = new Date().toLocaleTimeString();
        settime(a)
    });
  return (
    <>
    <h1>Clock</h1>
    <div>{time}</div>
    </>
  )
}

export default Clock