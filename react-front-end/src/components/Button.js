import React from "react";
import classNames from "classnames";

export default function Button(props) {
  const buttonClass = classNames("button", {
    "button--selected": props.selected
  });
  
  return (
    <button
      className={buttonClass}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
