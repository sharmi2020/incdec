// import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  const[increment,setIncrement]=useState(0);
  // const [decrement,setDecrement]=useState(0);

  function count(){
    setIncrement(increment+1)
  }

  function dec(){
    setIncrement(increment-1)
  }
  return (
    <div className="App">
      <h1>{increment}</h1>
      
      <button onClick={count}>Increment</button>
      <button onClick={dec}>Decrement</button>
    </div>
  );
}

export default App;
