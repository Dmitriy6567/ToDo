import React from "react";
import '../styles/Select.css'

const Select = ({ callback}) => {
    
    return(
        <select className="sort" 
        // defaultValue={defVal}
        onChange={callback}>
            {/* <option disabled>{defVal}</option> */}
            <option value={'asc'}>Asc</option>
            <option value={"desc"}>Desc</option>
        </select>
    )
}

export default Select;