import React from "react";
import '../styles/FilterTasks.css'
import Button from "./Button";
import Select from "./Select";

const FilterTasks = ({filter,setFilter, sorted,setSorted}) => {
    
    return(
        <div className="filter__tasks">
            <Button body={"All"} locked={filter==='all'} callback={()=>setFilter('all')} />
            <Button body={"Done"} locked={filter==='checked'} callback={()=>setFilter('checked')} />
            <Button body={"Undone"} locked={filter==='unchecked'} callback={()=>setFilter('unchecked')} />
            <Select defVal={'Sorted by Date'} value={sorted} callback={e=>setSorted(e.target.value)}/>
        </div>
    )
}

export default FilterTasks;