import React, {useState } from "react";
import Button from "./components/Button";
import Counter from "./components/Counter";
import './App.css'

type AppPropsType={
}

const App = (props:AppPropsType) => {
  const [count, setCount] = useState(0);

  const add = () => {
    if (count >= 5) 
    return 
    setCount(count + 1);
  };

  const resetValue = () => {
    setCount(0);
  };

  
  return (
    <div className={"App"}>
      <h1>counter</h1>

      <Counter count={count} />
      <div className={"flex-parent jc-center"}>
      <div className={"button"}><Button onClickHandler={add} text={"Inc"}/></div>
      <div className={"button"}><Button onClickHandler={resetValue} text={"Reset"}/></div>
      </div>
    </div>
);
};

export default App;


