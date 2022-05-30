import React from "react";
import '../styles/Select.css'

const Select = ({defVal,value, onChange}) => {

    return(
        <select className="sort" 
        defaultValue={defVal}
        onChange={event=>onChange(event.target.value)}>
            <option disabled>{defVal}</option>
            <option value="new">New</option>
            <option value="old">Old</option>
        </select>
    )
}

export default Select;