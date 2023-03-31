import React from "react";

type CounterPropsType = {
  count: number;
  
};

const Counter = (props: CounterPropsType) => {

  const counterClassName = `${props.count >= 5 && "maxCount"}`

  return <div className={counterClassName}>{props.count}</div>;
};

export default Counter;
