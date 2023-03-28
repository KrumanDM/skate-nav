import React, {useState } from "react";
import Button from "./components/Button";
import Counter from "./components/Counter";
import './App.css'

type Props = any;

const App = (props: Props) => {
  const [count, setCount] = useState(0);

  const add = () => {
    if (count >= 5) return;
    setCount(count + 1);
  };

  const resetValue = () => {
    setCount(0);
  };

  return (
    <div className={"App"}>
      <h1>counter</h1>
      {/* <h2>{count}</h2>
      <button onClick={() => add()}>+</button>
      <button onClick={() => resetValue()}>-</button> */}

      <Counter count={count}/>
      <Button  onClickHandler={add} text={"Inc"}/>
      <Button  onClickHandler={resetValue} text={"Reset"}/>
      
    </div>
  );
};

export default App;
