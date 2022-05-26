import React from "react";
import '../styles/FilterTasks.css'
import Button from "./Button";
import Select from "./Select";

const FilterTasks = ({filter,setFilter,setSorted,setPage}) => {

    return(
        <div className="filter__tasks">
            <Button body={"All"} locked={filter==='all'} callback={()=>{setFilter('');setPage(1)}}/>
            <Button body={"Done"} locked={filter==='done'} callback={()=>{setFilter('done');setPage(1)}}/>
            <Button body={"Undone"} locked={filter==='undone'} callback={()=>{setFilter('undone');setPage(1)}} />
            <Select defVal={'Sorted by '} callback={e=>setSorted(e.target.value)}/>
        </div>
    )
}

export default FilterTasks;