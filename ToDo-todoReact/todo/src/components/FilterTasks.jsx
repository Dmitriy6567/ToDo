import React from "react";
import '../styles/FilterTasks.css'
import Button from "./Button";
import Select from "./Select";

const FilterTasks = ({filter,setFilter,setSorted,setPage}) => {

    return(
        <div className="filter__tasks">
            <Button body={"All"} locked={filter==='all'} callback={()=>{setFilter('all');setPage(1)}}/>
            <Button body={"Done"} locked={filter==='checked'} callback={()=>{setFilter('checked');setPage(1)}}/>
            <Button body={"Undone"} locked={filter==='unchecked'} callback={()=>{setFilter('unchecked');setPage(1)}} />
            <Select defVal={'Sorted by '} callback={e=>setSorted(e.target.value)}/>
        </div>
    )
}

export default FilterTasks;