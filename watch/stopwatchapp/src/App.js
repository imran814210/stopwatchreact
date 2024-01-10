import './App.css';
import React, { useState, useEffect } from "react";
 
const App = () => {
    const [sec, setSec] = useState(0);
    const[min,setMin]=useState(0);
    const[hr,setHr]=useState(0);
    const[isRunning,setIsRunning]=useState(false);
    const[pouse,setPouse]=useState(false);

    useEffect(()=>{
        let interval;
        if(isRunning){
            interval=setInterval(() => {
                setSec((x)=>x+1); 
                if(sec===59){
                  setMin((m)=>m+1);
                  setSec(0);
                  if(min===59){
                    setHr((h)=>h+1);
                    setMin(0);
                  }
                }                 
            }, 1000);
        }else{
          clearInterval(interval);
        }
        return()=>clearInterval(interval);
    },[isRunning,sec]);

    const startbtn=()=>{
        setIsRunning(true);
        setPouse(false);
    }
    const stopbtn=()=>{
      setIsRunning(false);
      setSec(0);
      setMin(0);
      setHr(0);
    }
    const pousebtn=()=>{
      setIsRunning(false); 
      setPouse(true);
    }
    return (
        <div className='stopwatch'>
            <h1 style={{ color: "white" }}>
                StopWatch Project
            </h1>
            <h3 style={{color:'#ecf0f1'}}>
                React Example for using setInterval method
            </h3>
            <h1 style={{color:'red'}}>{String(hr).padStart(2,0)} : {String(min).padStart(2,0)} : {String(sec).padStart(2,0)}</h1>
            <div className='btnclass'>
                <button onClick={startbtn} disabled={isRunning}>{pouse?'Restart':'Start'}</button>  
                <button onClick={pousebtn}>Pouse</button>        
                <button onClick={stopbtn}>Stop</button>
                            
            </div>
        </div>
    );
}; 
export default App;