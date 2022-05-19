import React from "react";
import '../styles/Pagination.css'
import ButtonPagintion from "./ButtonPagination";

const Pagination = ({amountTask, setPage}) => {
    
    const countPage = Math.ceil(amountTask/5)

    function editingPage (index) {
        return setPage(index)
    }

    return(
        <div className="pagination">
            <ul>
                <li href="#">&laquo;</li>
                { [...Array(countPage).keys()].map(( page,index) => {
                    return <ButtonPagintion callback={()=>editingPage(index+1)} key={index+1} number={index+1}/>
                })}
                <li>&raquo;</li>
            </ul>
        </div>
    )
}

export default Pagination;