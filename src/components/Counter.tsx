import React from "react";

type CounterPropsType = {
  count: number;

};

const Counter = (props: CounterPropsType) => {
  return <div>{props.count}</div>;
};

export default Counter;
