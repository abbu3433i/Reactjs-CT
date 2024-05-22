import React from 'react'
import { useLocation } from 'react-router-dom';


function Viewcard() {

    const location = useLocation();
    const { nextcard }  = location.state;
    console.log(nextcard,"hiii");

  return (<>

    <div>Viewcard</div>
    <ul>
    {
       nextcard.map((a)=>{
        return <li>
         {a.name}-quantity: {a.quantity}
        </li>
       })
    }
    </ul>

    </>
  )
}

export default Viewcard