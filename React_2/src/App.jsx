import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const names = ["charlie","bob","alice","danielle"];
  

  return (
    <>
       <ul> 
        <br/>
            {names.map((name)=>{
               return <>  <li>{name}</li> <br /> </>
            })}
       </ul>
    </>
  )
}

export default App
