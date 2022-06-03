import '../styles/Select.css'

const Select = ({ callback}) => {
    
    return(
        <select className="sort" 
        onChange={callback}>
            <option value={'new'}>New</option>
            <option value={"old"}>Old</option>
        </select>
    )
}

export default Select;