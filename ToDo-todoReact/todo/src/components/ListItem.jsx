import React,{useState} from "react";
import Button from "./Button"
import Input from "./Input";
import '../styles/PostItem.css'

const ListItem = ({post,setPosts}) => {

    const [isCheck, setCheckbox] = useState(post.isCheck)

    const toggleCheck = (e) => {
        setPosts(prev=>prev.map(el=>el.id===post.id
            ? {...el,isCheck:e.target.checked}
            :el))
        setCheckbox(e.target.value)
    }
    
    const deletePosts = () =>{
        setPosts(prev=>prev.filter(el=>el.id!==post.id))
    }

    const editingTask = () => {
       setEditing(false)
    }

    const [editing, setEditing] = useState(true)

    const [inpEditing, setInpEditing] = useState (post.body)

    const saveTask = (e) => {

        if(e.keyCode===27){
            setEditing(true)
        }

        else if(e.keyCode===13){
            setPosts(prev =>
                prev.map(el =>
                    el.id === post.id ?
                    {...el,body: e.target.value}:
                    el))
            
            setEditing(true)
        }
    }

    return(
        <li className="task">
            <Input type={'checkbox'} defaultChecked={isCheck} callback={toggleCheck}/>
            { editing ? <span className="todo" onClick={editingTask} >{post.body}</span> : <input autoFocus onChange={(e)=>setInpEditing(e.target.value)} onKeyDown={saveTask} defaultValue={inpEditing}/>}
            <span className="date">{post.date}</span>
            <Button body={"Delete"} callback={deletePosts}/>
        </li>
    )
}

export default ListItem;