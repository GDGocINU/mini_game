import React, { useState, useEffect }from 'react'
import { motion } from 'framer-motion';
import '../components/TouchButton.css'

const TouchButton = ()=> {
    const [count, setCount] = useState(0);

    const onClickButton = ()=>{
        setCount(count+1);
    }

    return(
      <>
        <div className="touch-container">
          <div>{count}</div>
            <motion.button className="touch" initial={{ scale: 1 }} whileTap={{ scale: 0.9 }} onClick={onClickButton} >
            Button
          </motion.button>
        </div>
      </>
    )
}

export default TouchButton