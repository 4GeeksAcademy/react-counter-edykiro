import React from "react";
import { useState } from "react";

const Counter = () => {

  const [counter,setCounter] = useState(0);

  const [countState,setCountState] = useState(true);

  let TimerNumbers = counter.toString().split('');

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

        <div className="bg-success container border border-1 rounded-3 mt-4 text-center justify-content-center col-4">
          <div className="text-center">
            <h5 className="mt-4">My Precious Counter</h5>
          </div>
          <div className="text-center">
            <div className="row justify-content-center">
              <div className="border border-2 m-1" style={{width:"1rem"}}>{TimerNumbers[0]}</div>
              <div className="border border-2 m-1" style={{width:"1rem"}}>{TimerNumbers[1]}</div>
              <div className="border border-2 m-1" style={{width:"1rem"}}>{TimerNumbers[2]}</div>
              <div className="border border-2 m-1" style={{width:"1rem"}}>{TimerNumbers[3]}</div>
              <div className="border border-2 m-1" style={{width:"1rem"}}>{TimerNumbers[4]}</div>
            </div>
            </div>
            <div className="mb-4 mt-3">
            <button onClick={()=>setCountState(0)} className="m-2">Start</button>
            <button onClick={()=>setCountState(1)} className="m-2">Pause</button>
            <button onClick={()=>setCountState(2)} className="m-2">Decrease</button>   
            <button onClick={()=>setCountState(3)} className="m-2">Resetear</button>   
            </div>
          </div>
    </>
  );
};

export default Counter;