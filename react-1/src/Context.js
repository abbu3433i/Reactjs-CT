import React, { useContext } from 'react'

import { data,data1 } from './App' //--------------

function Context() {
    const firstname = useContext(data);
    const lastname = useContext(data1);
  return (
    <div>
        <h1>i am {firstname} and {lastname}</h1>
    </div>
  )
}

export default Context