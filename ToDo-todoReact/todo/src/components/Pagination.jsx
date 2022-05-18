import React from "react";
import '../styles/Pagination.css'

const Pagination = ({count}) => {
    console.log(count)
    return(
        <div className="pagination">
            <ul>
                <li href="#">&laquo;</li>
                <li className="active">1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>&raquo;</li>
            </ul>
        </div>
    )
}

export default Pagination;