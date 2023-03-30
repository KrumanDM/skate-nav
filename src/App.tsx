import React, {useState } from "react";
import Button from "./components/Button";
import Counter from "./components/Counter";
import './App.css'
import s from './App.module.css'

type AppPropsType={
  
}

const App = (props:AppPropsType) => {
  const [count, setCount] = useState(0);

  const add = () => {
    const redCounter = s.button 
    if (count >= 5) 
    return redCounter
    setCount(count + 1);
  };

  const resetValue = () => {
    setCount(0);
  };

  return (
    <div className={"App"}>
      <h1>counter</h1>

      <div className={count >= 5=>string}><Counter type={redCounter} count={count}/></div>
      <div className={"flex-parent jc-center"}>
      <div className={"button"}><Button onClickHandler={add} text={"Inc"}/></div>
      <div className={"button"}><Button onClickHandler={resetValue} text={"Reset"}/></div>
      </div>
    </div>
  );
};

export default App;


