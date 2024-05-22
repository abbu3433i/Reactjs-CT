import React from 'react'
import CompA from './CompA'

function Home(data) {
  return (
    <>
     <h1> {data.a}</h1>

     <CompA b={data.a}/> 
    </>
  )
}

export default Home




// import React from 'react'

// function Home() {
//   return (
//     <div>Home  aaagya bhai</div>
//   )
// }

// export default Home