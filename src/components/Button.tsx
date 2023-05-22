import React, { useState } from "react";

type ButtonPlusPropsType = {
  text: string
  onClickHandler: () => void
};

const Button = (props: ButtonPlusPropsType) => {
   
  return <div className="buttonPlus">
    <button onClick={() => props.onClickHandler()}>{props.text}
    </button>
  </div>;
};

export default Button;

// div*5>h1+span+button