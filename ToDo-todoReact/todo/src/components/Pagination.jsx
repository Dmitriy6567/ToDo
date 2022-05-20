import React,{ useEffect} from "react";
import '../styles/Pagination.css'
import ButtonPagintion from "./ButtonPagination";

const Pagination = ({amountTask, page ,setPage}) => {
    
    const countPage = Math.ceil(amountTask/5)
    const countBtn = [...Array(countPage).keys()];
    
    console.log(countPage,page,amountTask) // количество кнопок, номер кнопки, количество задач

    useEffect (()=>{
        page>=amountTask/5 && countPage>0 && setPage(countPage)
    },[amountTask])

    return(
        <div className="pagination">
            <ul>
                <li onClick={()=>setPage(1)}>{'<<'}</li>
                <li onClick={()=>page>1 && setPage(page-1)}>&laquo;</li>
                { countBtn.map( item => {
                    return <ButtonPagintion key={item+1} item={item} page={page-1} setPage={setPage} number={item+1}/>
                })}
                <li onClick={()=>page<countPage && setPage(page+1)}>&raquo;</li>
                <li onClick={()=>setPage(countPage)}>{'>>'}</li>
            </ul>
        </div>
    )
}

export default Pagination;