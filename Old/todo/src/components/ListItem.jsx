import React,{useState} from "react";
import Button from "./Button"
import Input from "./Input";
import '../styles/PostItem.css'

const ListItem = ({post,setPosts}) => {

    const [isCheck, setCheckbox] = useState(post.isCheck)

    const toggleCheck = (e) => {
        setPosts(prev=>prev.map(el=>el.id===post.id? {...el,isCheck:e.target.checked}:el))
        setCheckbox(e.target.value)
    }
    
    const deletePosts = () =>{
        setPosts(prev=>prev.filter(el=>el.id!==post.id))
    }

    return(
        <li className="task">
            <Input type={'checkbox'} defaultChecked={isCheck} callback={toggleCheck}/>
            <span className="todo">{post.body}</span>
            <span className="date">{post.date}</span>
            <Button body={"Delete"} callback={deletePosts}/>
        </li>
    )
}

export default ListItem;