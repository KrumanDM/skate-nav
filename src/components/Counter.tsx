import React from "react";

type CounterPropsType = {
  counter: any;
};

const Counter = (props: CounterPropsType) => {
  return (
    <div>
      <h3>Counter</h3>
      <h2>{props.counter}</h2>
    </div>
  );
};

export default Counter;
