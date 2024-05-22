import React, { useEffect, useState } from 'react'

import dummyFoodData from './Dummyfood' //---dummudata import kiya 
import './App.css' 

import { useNavigate } from 'react-router-dom'  //---usenavigate immport kiya 


//----------------------useState---------------------------
function Card() {
  const [data, setdata] = useState([]) //---ye empty array me dummyfood ka data aa jayega 

  const [nextcard, setnextcard] = useState([])

  //--------------useEffect------------
  useEffect(()=>{                                  
    setdata(dummyFoodData.map(item => ({ ...item, quantity: 0 }))); //---purana data bhi rhe or quantity:0  ->--add kar do
  },[])


//---------------------Add Quantity--------------------------------
  const handleAdd = (idd) => {
    const updatedCart = data.map(item =>
      item.id === idd ? { ...item, quantity: item.quantity + 1 } : item
    );
    setdata(updatedCart);
  };

//---------------------Remove Quantity---------------------------------------
  const handleRemove = (idd) => {
    const updatedCart = data.map(item =>
      item.id === idd && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setdata(updatedCart);
   };


//------------------------Add to card -----------------------------------
function addtoCard(i){
  console.log(i);

    const updatedCart = data.map(rcb =>
      rcb.id === i ? { ...rcb, quantity: 1 } : rcb //--original data ki id se function i jese hi match hogi... to target item me purana data to rhe, or quantity and uski value 1 show kar do add kar do...., and jis item pe click nhi hua usko vese hi rhne do
    );
    setdata(updatedCart);

    //************filter the data ***********/
    const store = {...data.find(item=> item.id === i ),quantity: 1 };
    setnextcard([...nextcard,store])  //---jis pe click ho rha he uska data nextcard naam ki usestate me store ho rha he 

  };


//--------------------------Redirect on new page-------------------------------------

  let nav = useNavigate() //-----ye usenavigate button pe click karte hi next page pe le ja rha he
  function navigation(){
    nav('/view',{state:{nextcard}}) 
  } 


//------------------------------Total price---------------------------------------
  const TotalPrice =() =>{
    return data.reduce((accumolator,nextval) =>
    accumolator+nextval.price * nextval.quantity ,0 );  //---initially aaumo 0 diya he
  //++++jis bhi item pe click hoga uske price as a nextval hogi fir jis bhi item ki quantity + kari to uska price as a nextval quantity ki value se multiply ho jayega
  };


  return (
    <>
    <div id='top'>
    <div id='left'>
    <h2>ADD Card</h2>
    <button onClick={navigation}>view card</button>
    </div>
    <div id='right'>
      <h2>Total Price: ${TotalPrice()}</h2>
    </div>
    </div>
  
    

{    //-----------------------HTML inside the javascript-------------------------
  data.map((value,index)=>{
    return(
    <div id='box'>
      <img id='pic' src={value.image}></img>
    <div id='boxi'>
      <h1>{value.name}</h1>
      <p>{value.description}</p>
      <p>{value.price}</p>
     
        {//---------------agar quantity ki value 0 se jada hui to show kar do nhi to nhi kro
          value.quantity>=1?(
            <p>quantity:{value.quantity}</p>
          ):" "
        }

          {     //----------------------abhi 0 he to addtoCard show hoga jis bhi addtoCard item pe click hoga uski id function me paas hogi or quantity  1 hogi +,- button show kar dega -----------------------------------------
            value.quantity ===0 ? (
              <button onClick={() => addtoCard(value.id)}>Add to Cart</button>
            ) : (
              <div>
                  <button onClick={() => handleRemove(value.id)}>-</button>
                  <button onClick={() => handleAdd(value.id)}>+</button>
                </div>
            ) 
          }

    </div>
    
    </div>//box

    )
  })
}



    </>
  )
}

export default Card
