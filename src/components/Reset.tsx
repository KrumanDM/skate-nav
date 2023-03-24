import React from "react";

type ResetPropsType = {
    setCounter: (counter: number) => void
}



const Counter = (props:ResetPropsType) => {

    const reset = () =>{
        setCounter(0)
      }

    return (
        <button className="reset" onClick={reset}>Reset</button>
    )
}

export default Counter