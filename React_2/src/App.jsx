import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'

function App() {  
   
  const isGointOut = true ;
  /* let answer = ''  ; */


  return (
    <main> 
            <h1> Do i feel like doing out tonight ?</h1>
            <button className=''>{ isGointOut === true ? "Yes" : "No" }</button>
    </main>
  )
}

export default App
