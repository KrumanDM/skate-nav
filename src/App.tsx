import React, { FC, useState } from "react";

type Props =any

const App = (props:Props) => {
  const [count, setCount] = useState(0);

  const add = (factor = 1) => {
    if (count >= 5) return
    setCount(count + factor);
  };
  
  const resetValue = () => {
    setCount(0)
  }
  
  return (
    <div>
      <h1>counter</h1>
      <h2>{count}</h2>
      <button onClick={() => add()}>+</button>
      <button onClick={() => resetValue()}>-</button>
    </div>
  );
};

export default App;