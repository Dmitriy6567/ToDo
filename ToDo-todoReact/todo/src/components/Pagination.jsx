import React from "react";
import '../styles/Pagination.css'
import ButtonPagintion from "./ButtonPagination";

const Pagination = ({amountTask, page ,setPage}) => {
    
    const countPage = Math.ceil(amountTask/5)

 
    return(
        <div className="pagination">
            <ul>
                <li onClick={()=>page>1 && setPage(page-1)}>&laquo;</li>
                { [...Array(countPage).keys()].map( item => {
                    return <ButtonPagintion key={item+1} item={item} page={page-1} setPage={setPage} number={item+1}/>
                })}
                <li onClick={()=>page<countPage && setPage(page+1)}>&raquo;</li>
            </ul>
        </div>
    )
}

export default Pagination;