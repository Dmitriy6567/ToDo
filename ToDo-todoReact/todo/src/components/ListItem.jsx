import React,{useState} from "react";
import Button from "./Button"
import Input from "./Input";
import '../styles/PostItem.css'

const ListItem = ({posts,post,setPosts}) => {

    const [isCheck, setCheckbox] = useState(post.isCheck)

    const [editing, setEditing] = useState(true)

    const [inpEditing, setInpEditing] = useState (post.body)

    const toggleCheck = (e) => {
        setPosts(prev=>prev.map(el=>el.id===post.id? {...el,isCheck:e.target.checked}:el))
        setCheckbox(e.target.value)
    }
    
    const deletePosts = () =>{
        setPosts(prev=>prev.filter(el=>el.id!==post.id))
    }

    const editingTask = () => {
       setEditing(false)
    }

    const saveTask = (e) => {
        if(e.keyCode===27){
            setEditing(true)
        }
        else if(e.keyCode===13){
            setInpEditing(e.target.inpEditing)
            // setPosts(prev=>prev.map(el=>el.id===post.id? {...el,body:e.target.inpEditing}:el))
            setEditing(true)
            console.log(inpEditing)
        }
    }

    return(
        <li className="task">
            <Input type={'checkbox'} defaultChecked={isCheck} callback={toggleCheck}/>
            { editing ? <span className="todo" onClick={editingTask} >{post.body}</span> : <input onBlur={editingTask} onKeyDown={saveTask} defaultValue={inpEditing}/>}
            <span className="date">{post.date}</span>
            <Button body={"Delete"} callback={deletePosts}/>
        </li>
    )
}

export default ListItem;