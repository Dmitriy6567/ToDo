import React from "react";

const ButtonPagintion = ({number, callback}) => {
    console.log(number,callback)
    return(
        <li onClick={callback} className={callback===number ? 'active' : ''} >{number}</li>
    )
}

export default ButtonPagintion;