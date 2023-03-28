import React, { useState } from "react";

type ButtonPlusPropsType = {
  text: string
  onClickHandler: () => void
};


const Button = (props: ButtonPlusPropsType) => {
   
  return <div>
    <button onClick={() =>  props.onClickHandler()}>{props.text}</button>
  </div>;
};

export default Button;