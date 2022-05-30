import React from "react";
import "../styles/Input.css";

const Input = ({ type, placeholder, classStyle,value,callback, defaultChecked,addEnter}) => {
  
  return <input type={type} className={classStyle} placeholder={placeholder} defaultChecked={defaultChecked} value={value} onChange={callback} onKeyDown={addEnter}/>;
};

export default Input;
