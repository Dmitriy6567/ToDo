import React from "react";
import '../styles/Pagination.css'
import ButtonPagintion from "./ButtonPagination";

const Pagination = ({amountTask}) => {
    
    const countPage = Math.ceil(amountTask/5)
    console.log(countPage)
    return(
        <div className="pagination">
            <ul>
                <li href="#">&laquo;</li>
                <li className="active">1</li>
                { [...Array(countPage).keys()].map((page,index) => {
                    console.log(countPage)
                    return <ButtonPagintion  number={index+2}/>
                    
                })}
                <li>&raquo;</li>
            </ul>
        </div>
    )
}

export default Pagination;