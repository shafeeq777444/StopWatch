import { useEffect, useState,useRef } from "react"

function StopWatch(){
    const [isRunning,setIsRunning]=useState(false);
    const [elapsedTime,setElapsedTime]=useState(0);
    const startTimeRef = useRef(0);
    const intervalRef=useRef(null);

    useEffect(()=>{
if(isRunning){
    intervalRef.current=setInterval(() => {
        setElapsedTime(Date.now()-startTimeRef.current)
    }, 10)}
    return()=>clearInterval(intervalRef.current)
},[isRunning])

    function start(){
        setIsRunning(true)
        startTimeRef.current=Date.now()-elapsedTime
    }
    function stop(){
        setIsRunning(false)
    }
    function reset(){
        setIsRunning(false)
        setElapsedTime(0)
    }
    function formatTime(){
        let hour=Math.floor(elapsedTime/(1000*60*60));
        let minute=Math.floor(elapsedTime/(1000*60)%60);
        let seconds=Math.floor(elapsedTime/(1000)%60);
        let milliseconds=Math.floor(elapsedTime%1000/10);
        
        hour= String(hour).padStart(2,"0")
        minute= String(minute).padStart(2,"0")
        seconds= String(seconds).padStart(2,"0")
        milliseconds= String(milliseconds).padStart(2,"0")
        

        return `${minute}:${seconds}:${milliseconds}`;
    }
    return(

<div className="stopWatch">
<div>{formatTime()}</div>
<div className="watchButtons">
    <button onClick={start}>START</button>
<button onClick={stop}>STOP</button>
<button onClick={reset}>RESET</button></div>

</div>
    )
}
export default StopWatch