import React,{useState} from "react";
import Button from "./Button"
import Input from "./Input";
import '../styles/PostItem.css'
import ModalWindow from "./ModalWindow";

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
            setInpEditing(post.body)
            setEditing(true)
        }

        else if(e.keyCode===13){
            inpEditing.length ? setPosts(prev =>
                prev.map(el =>
                    el.id === post.id ?
                    {...el,body: e.target.value}:
                    el), setEditing(true))
            
            : setEditing(true)
        }
    }

    const saveTaskonBlur = (e) =>{
        inpEditing.length ?
        setPosts(prev =>
            prev.map(el =>
                el.id === post.id ?
                {...el,body: e.target.value}:
                el), setEditing(true))
        : setEditing(true)
    }

    const [modal, setModal] = useState(false)

    const [modalValue, setModalValue] = useState (post.body)

    const modalWindow = (e) => {
        e.stopPropagation();
        setModalValue(post.body)
        setModal(true)
    }
    
    return(
        <li className="task">
            <ModalWindow modalValue={modalValue} setModalValue={setModalValue} visible={modal} setVisible={setModal} post={post} setPosts={setPosts} />
            <Input type={'checkbox'} classStyle={'flag'} defaultChecked={isCheck} callback={toggleCheck}/>
            {editing ? <span className="todo" onClick={editingTask}>
                {post.body.length<10 ?
                post.body:
                <>
                {post.body.substring(0,20)}
                <Button body={'...'} callback={modalWindow} style={{width:'10%'}} />
                </>
                }
            </span>
            : <input autoFocus onBlur={saveTaskonBlur} onChange={(e)=>setInpEditing(e.target.value)} onKeyDown={saveTask} defaultValue={post.body}
            style={{width:'25%'}}/>}
            <span className="date">{post.date}</span>
            <Button body={"Delete"} callback={deletePosts}/>
        </li>
        
    )
}

export default ListItem;