import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'

function App() {  
   
  const isGointOut = false ;
  let answer = isGointOut === true ? "Yes" : "No" ;


  return (
    <main> 
            <h1> Do i feel like doing out tonight ?</h1>
            <button className=''>{answer}</button>
    </main>
  )
}

export default App
