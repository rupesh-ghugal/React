import { useState } from 'react'
import './App.css'

function App() {
  let [counter,setcounter]=useState(15);

// let counter =15;

const addvalue=()=>{
  if (counter<20) {
    
    setcounter(counter+1);
  }
  else alert("bs bhai hogya");
}
const removevalue=()=>{
  if (counter>0) {
    
    setcounter(counter-1);
  }
  else alert("negative nhi");
}

  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addvalue}>Add value {counter}</button>
      <br />
      <button onClick={removevalue}>Remove value {counter}</button>
    </>
  )
}

export default App
