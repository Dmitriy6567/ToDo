import React from "react";
import '../styles/Button.css'

const Button = ({body,callback,check}) =>{

    return(
        <button onClick={callback} className="btn">{body}</button>
    )
}

export default Button;