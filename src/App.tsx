import { useEffect, useState } from "react";
import ProgressBar from "./components/ProgressBar";
import TouchButton from "./components/TouchButton";
import "./styles.css";

export default function App() {
  const [value, setValue] = useState(0);

  useEffect(()=>{
      setInterval(()=>{
        setValue((val)=> val + 1);
      }, 100);
  },[])

  return(
    <div className="container">
      <div className="top_container">
        <span>💫 Click Button 💫</span>
        <ProgressBar value={value}/>
      </div>
      <div className="bottom_container"><TouchButton/></div>
    </div>
  )
}
