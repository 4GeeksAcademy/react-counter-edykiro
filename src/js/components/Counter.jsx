import React from "react";
import { useState } from "react";

const Counter = () => {

  const [counter,setCounter] = useState(0);

  const [countState,setCountState] = useState(true);

  /*
  countState puede contener uno de estos 3 valores:
  0: Aumentar conteo
  1: Pausar conteo
  2: Decrementar negativo
  3: Resetear conteo
  */

  if(countState == 0){
  setTimeout(() => {
  setCounter(counter+1)
  }, 1000);
  }

  else if(countState == 2){
    if(counter > 0){
  setTimeout(() => {
  setCounter(counter-1)
  }, 1000);
  }
  }

  else if(countState == 3){
    setTimeout(() => {
      setCounter(0)}, 1000);
    setCountState(1);
  }

  return (
    <>
        <div className="card mt-3 text-center justify-content-center" style={{width:"25rem", height:"18rem"}}>
          <div className="card-body">
            <h5>My Precious Counter</h5>
            <p className="card-title">Counter: {counter}</p>
          </div>
          <button onClick={()=>setCountState(0)} className="m-2">Start</button>
          <button onClick={()=>setCountState(1)} className="m-2">Pause</button>
          <button onClick={()=>setCountState(2)} className="m-2">Decrease</button>   
          <button onClick={()=>setCountState(3)} className="m-2">Resetear</button>   
        </div>
    </>
  );
};

export default Counter;