import React from "react";
import '../styles/Select.css'

const Select = ({defVal, value, callback}) => {
    
    return(
        <select className="sort" 
        defaultValue={defVal}
        onChange={callback}>
            <option disabled>{defVal}</option>
            <option value={'new'}>New</option>
            <option value={"old"}>Old</option>
        </select>
    )
}

export default Select;