import { useState } from 'react'

import './App.css'

function App() {

  // let counter = 5;
  let [counter, setCounter] = useState(0)

  const addValue = () =>{
    // counter = counter+1
    if(counter<20){
        setCounter(counter+1)
    }
  }

  const removeValue = () =>{
    // counter = counter+1
    if(counter>0){
        setCounter(counter-1)
    }
  }
  return (
    <>
     <h1>Hello world</h1>
     <h2>Counter value: {counter}</h2>
     <button onClick={addValue}>Add</button>
     <br/>
     <button onClick={removeValue}>Remove</button>
    </>
  )
}

export default App
