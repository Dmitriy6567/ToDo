import React,{useState} from "react";
import Button from "./Button"
import Input from "./Input";
import '../styles/PostItem.css'
import ModalWindow from "./ModalWindow";

const ListItem = ({post,setPosts, patchChangeTask, patchCheckTask, deleteTasks, posts}) => {

    const [done, setCheckbox] = useState(post.done)

    const toggleCheck = (e,uuid) => {
        setPosts(prev=>prev.map(el=>el.uuid===post.uuid
            ? {...el,done:!e.target.checked}
            :el))
        setCheckbox(e.target.value)
        patchCheckTask(e,uuid)
    }
    
    const deletePosts = () =>{
        setPosts(prev=>prev.filter(el=>el.uuid!==post.uuid))
        deleteTasks(post,post.uuid)
    }

    const editingTask = () => {
       setEditing(false)
    }

    const [editing, setEditing] = useState(true)

    const [inpEditing, setInpEditing] = useState (post.name)

    const saveTask = (e,inpEditing,uuid) => {

        if(e.keyCode===27){
            setInpEditing(post.name)
            setEditing(true)
        }

        else if(e.keyCode===13){
            inpEditing.length ? setPosts(prev =>
                prev.map(el =>
                    el.uuid === post.uuid ?
                    {...el,name: e.target.value}
                    : el), setEditing(true))
            
            : setEditing(true)

            patchChangeTask(inpEditing,uuid)
        }
    }

    const saveTaskonBlur = (e,inpEditing,uuid) =>{
        inpEditing.length ?
        setPosts(prev =>
            prev.map(el =>
                el.uuid === post.uuid ?
                {...el,name: e.target.value}:
                el), setEditing(true))
        : setEditing(true)

        patchChangeTask(inpEditing,uuid)
    }

    const [modal, setModal] = useState(false)

    const [modalValue, setModalValue] = useState (post.name)

    const modalWindow = (e) => {
        e.stopPropagation();
        setModalValue(post.name)
        setModal(true)
    }
    
    return(
        <li className="task">
            <ModalWindow modalValue={modalValue} posts={posts} setModalValue={setModalValue} visible={modal} setVisible={setModal} post={post} setPosts={setPosts} patchChangeTask={patchChangeTask}/>
            <Input type={'checkbox'} classStyle={'flag'} defaultChecked={done} callback={(e)=>toggleCheck(e,post.uuid)}/>
            {editing ? <span className="todo" onClick={editingTask}>
                {post.name.length<10 ?
                post.name:
                <>
                {post.name.substring(0,10)}
                <Button body={'...'} callback={modalWindow} style={{width:'10%'}} />
                </>
                }
            </span>
            : <input autoFocus onBlur={(e)=> saveTaskonBlur(e,inpEditing,post.uuid)} onChange={(e)=>setInpEditing(e.target.value)} onKeyDown={(e) => saveTask(e,inpEditing, post.uuid)} defaultValue={post.name}
            style={{width:'25%'}}/>}
            <span className="date">{post.date}</span>
            <Button body={"Delete"} callback={deletePosts}/>
        </li>
        
    )
}

export default ListItem;