import React from "react";

type CounterPropsType = {
  count: number;
  
};

const Counter = (props: CounterPropsType) => {

  const counterClassName = `${props.count >= 5 && "maxCount"}`

  return <div className={counterClassName}><b>{props.count}</b></div>;

};

export default Counter;
