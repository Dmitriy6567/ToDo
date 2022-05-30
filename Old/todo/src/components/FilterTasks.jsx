import React,{useMemo, useState} from "react";
import '../styles/FilterTasks.css'
import Button from "./Button";
import Select from "./Select";

const FilterTasks = ({setFilter}) => {

    return(
        <div className="filter__tasks">
            <Button body={"All"} />
            <Button body={"Done"} callback={setFilter} check={'checked'}/>
            <Button body={"Undone"} />
            <Select defVal={'Sort by date'}/>
        </div>
    )
}

export default FilterTasks;