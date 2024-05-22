
// //----------------------------component ----------------------
// import React from 'react'

// function Cart() {  //---cart function banaye or usko niche use kiya 
//   return (
//     <>
//     <h1>cardddd</h1>
//     </>
//   )
// }

// export default function App() {
//   return (
//     <>
//     <div>App</div>
//     <Cart/> 
//     </>
//   )
// }


//------------------------------map fn in react---------------------------
// import React from 'react'

// function App() {
//   const arr = [1,2,3,4,5];
//   return (
//     <div>
//     {
//       arr.map((elem,i)=>{
//       return <li key={i}>{elem}</li>
//       })
//     }
//     </div>
//   )
// }

// export default App


// -------------------------------Props data sharing in other componenets--------------------------------------
// import React from 'react'
// import Home from './Home'

// function App() {
//   let user = "abhishek"
//   return (
//     <>
//     <Home a={user}/>
//     </>
//   )
// }

// export default App


// -----------------------[Hooks]----Incresing no. with the help of "UseState"----------------------------------

// import React, { useState } from 'react'

// function App() {
//  const [value, setvalue] = useState(0)

//  const fun1 =()=>{
//   setvalue(value+1)
//  }

//   return (
//     <>
//     <div>{value}</div>
//     <button onClick={fun1}>click me</button>
//     </>
//   )
// }

// export default App

//----------------------------------Bootstrap----------------------------

// import React from 'react'
// import Clock from './Clock'
// import Bootstrap from './Bootstrap'
// import './App.css'

// function App() {
 
//   return (
//     <div>
//       {/* <Clock/> */}

//       <Bootstrap/>
//     </div>
//   )
// }

// export default App


//-----------------------------react-router-dom----------------------------------------------------------

// import React from 'react'
// import Navbar from './Navbar'
// import { NavLink } from 'react-router-dom'

// import { Route,Routes } from 'react-router-dom' //-------------put this route and routes which help you to switch the page
// import Home from './Home'
// import AboutUs from './AboutUs'
// import ContactUs from './ContactUs'

// function App() {
//   return (
//     <>

//       <Navbar/>

//       <Routes> 

//         <Route path='/'  element={<Home/>}   />
//         <Route path='/AboutUs'   element={<AboutUs/>}  />
//         <Route path='/ContactUs'  element={<ContactUs/>}  />
//       </Routes>
      
//       </>
//   )
// }

// export default App



/********************************UseEffect************************** */
// import React, { useEffect, useState } from 'react'

// function App() {
//     const [val, setval] = useState(0)

//     const fn =()=>{
//      setval(val+1)
//     }

//     //----------------Refresh pe chalega
//     useEffect(() => {
//     alert("warning")
//     }, []) //--------------empty arr ka mtlb he ki ye bas page refresh hone pe hi chalega uske baad nhi chalega
    

//     useEffect(() => {
//     alert("warning")
//     }, [val]) //--------------ab jab bhi val ki value badegi tab bhi alert chalega kyuki arr ke andar val paas kar diya 
    


//   return (
//     <div onClick={fn}>click me: {val}</div>
//   )
// }

// export default App




//**************************[Hook]******use Effect******************************** */

// import React, { useEffect , useState } from 'react'


// function App() {
//  const [count, setcount] = useState(0);
//  function counthandler(){
//   setcount(count+1)
//  }

// // ------------ye page ke sath hi reaload ho jayega
//  useEffect(()=>{
//   fetch('https://jsonplaceholder.typicode.com/todos').
//   then((res)=>{
//     return res.json()
//   }).then((data)=>{
//     console.log(data);

//     setApi(data)

//   }) 

// },[count]);  //---ye fetch api ki request ko second time fullfill nhi hone dega agar count [] brackets ke andar nhi likha hoga to


// const [Api, setApi] = useState([]); //Api se data screen pe show karne ke liya 

//   return (
//     <>
//     <h2>{count}</h2>
//     <button onClick={counthandler}>add</button>
    
//     <div>{
//     Api.map((val)=>{
//     return (val.id)
//     })
//   }
//     </div>
//     </>
//   )
// }

// export default App



// ********************************Todolist****************************************
// import React, { useState } from 'react'

// function App() {

//   const [input, setinput] = useState();  //-------isme input value store ho rhi
//   const [data, setdata] = useState([]);  

//   function fun1(e){
//   setinput(e.target.value)
//   }

//   //----------Add handler--------
//   function add(){
//    setdata([...data,input]); //-----array format is must for map function
//    setinput('');
//   }


//   //-------------deletehandler--------
//   function del(id){
//   let newAA = data.filter((val,i)=>{
//   return i!=id  //---mtlb true bali sari condition chal jayen false bali na chale (0!=0)=>false....(1!=0,2!=0,3!=0)=>True kyuki ye not equal to he 0 ke
//   })
//   setdata(newAA)
//   }

//   return (
//     <>
//     <input type='text' onChange={fun1} placeholder='Enter something' name='input' value={input}/>
//     <button onClick={add} >add</button>
    
//     {
//       data.map((a,b)=>{
//         return <><li>{a}</li> 
//         <button onClick={()=>del(b)}>Del</button></>
//       })
//     }
//     </>
//   )
// }

// export default App




/******************************Form*************************************/
// //---------ek hi usestate se sare input tag control ho rhe hen
// import React, { useState } from 'react'

// function App() {
//   const [input, setinput] = useState({
//     firstname:"",
//     lastname:"",
//     email:"",
//     password:""
//   });


//   function fun1(e){
//   // console.log(e.target.name,e.target.value);
//   const {name,value} = e.target;
//   setinput({...input,[name]:value})
//   // console.log(input,"input"); //-------this will show values which we return it
//   }


//   function done(e){
//   e.preventDefault();   //--------This will help to achive default behavior..when we not use it and when we would click on submit btn data will auto reload not shown in console
//   console.log(input);
//   }


//   return (
//     <>
//     <form onSubmit={done}>
//     <input type='text' onChange={fun1} name='firstname' value={input.firstname} placeholder='Enter first name'></input>
//     <br/>
//     <br/>
//     <input type='text' onChange={fun1} name='lastname' value={input.lastname} placeholder='Enter last name'></input>
//     <br/>
//     <br/>
//     <input type='email' onChange={fun1} name='email' value={input.email} placeholder='Enter email name'></input>
//     <br/>
//     <br/>
//     <input type='password' onChange={fun1} name='password' value={input.password} placeholder=' password'></input>
//     <br/>
//     <br/>
//     <button>submit</button>
//     </form>
//     </>
//   )
// }

// export default App




/*********************************use context**********************************/
// import React, { createContext } from 'react'
// import Context from './Context'


// //what is usecontext hook?
// //create , provider , usecontext
// //how to use it ?
// const data = createContext();    //      2 createcontext banao data,data1 variable naam se
// const data1 = createContext();   //           ^
//                                  //           |
// function App() {

//   const name = "abhishek";    //---------2 data ko dusre context me bhejna he to 
//   const gender = "gour";      //

//   return (
//     //------------------fir createContext variables ke naam.provider se value paas karni he then niche export bhi karna he or receiving component me ja ke import karna he
//     <div>
//       <data.Provider value={name}> 
//             <data1.Provider value={gender}>
//                 <Context/>
//             </data1.Provider>    
//       </data.Provider>
//     </div>
//   )
// }

// export default App
// export {data,data1}







//------------------------------Small project-----------------------------------

// import React from 'react'
// import { Route,Routes } from 'react-router-dom'

// import Viewcard from './Viewcard'
// import Card from './Card'


// function App() {

//     return (
//     <>

// <Routes>
//   <Route path='/' element={<Card/>}></Route>
//   <Route path='/view' element={<Viewcard/>}></Route>
// </Routes>

    
//     </>
//   )
// }

// export default App





// //----------------------------------useReducer-----------------------
// import React, { useReducer } from 'react'

// let reducer = (state,action)=>{  //---action ke andar dispatch ki value aayegi
//  if (action.type==="incr") {
//     return state+1
//  }
//  else if (action.type==="decr") {
//     return state-1
//  }
// else if (action.type==="res") {
//     return 0
//  }
//  return state
// }

// function App() {
//     const [state, dispatch] = useReducer(reducer, 0)
//   return (
//     <div>
//         <h1>{state}</h1>
//         <div>
//             <button onClick={()=>dispatch({type:"incr"})}>Incresing</button>
//             <button onClick={()=>dispatch({type:"decr"})}>Decreasing</button>
            // <button onClick={()=>dispatch({type:"res"})}>reset</button> 
//         </div>
//     </div>
//   )
// }

// export default App



//----------------------------------useReducer(change color)-----------------------
// import React, { useReducer } from 'react'

// const initialState = false;

// let reducer = (state,action)=>{  
//  switch (action.type){
//     case 'red':
//         return !state;

//     case 'res':
//         return initialState;

//     default:
//         return state;
//  }
 
// }

// function App() {
//     const [state, dispatch] = useReducer(reducer, initialState)
//   return (
//     <div>
//         <h1 style={{color:state?"red":"blue"}}>{state ? 'On' : 'Off'}</h1>
//         <div>
//             <button onClick={()=>dispatch({type:"red"})}>red</button>
//             <button onClick={()=>dispatch({type:"res"})}>reset</button>
//         </div>
//     </div>
//   )
// }

// export default App



