import { useState } from "react";
import React from "react";

type PlusPropsType = {
  
}





const Plus = (props: PlusPropsType) => {
  // let [inc, setInc] = useState<number>(0)
  


  const increase = (counter:number) => {
    
    return counter + 1
  };
  
  
    return (
      <button className="control__btn" onClick={increase}>Plus</button>
    )
}

export default Plus