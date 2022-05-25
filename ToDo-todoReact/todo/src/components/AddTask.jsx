import React,{useState} from "react";
import '../styles/AddTask.css'
import Button from "./Button";
import Input from "./Input";

const AddTask = ({posts,setPosts, postTasks}) => {

    const [task,setTask] = useState('');

    const data = new Date();

    const  addNewPost = () => {

        const newPost = {
            name:task,
            date: data.getDate() + '/'+ (data.getMonth()<10 ? '0' + data.getMonth() : data.getMonth()) + '/' + data.getFullYear(),
            done: false
        }

        if(task.trim()){
            postTasks(newPost)
            setPosts([...posts,newPost])
        }

        setTask('')
    }

    const clearAll = () =>{
        setPosts([])
    }

    const clearDone = () =>{
        setPosts(posts.filter(post => post.done===false))
    }

    const clearUndone = () => {
        setPosts(posts.filter(post => post.done===true))
    }

    const getValue = (e) =>{
        setTask(e.target.value);
    }

    const addEnter = (e) => {
        if(e.code==="Enter"){
            addNewPost()
        }
    }

    return(
        <div className="add__task">
            <Input type={'text'} placeholder={'I want to...'} classStyle={'inp'} value={task} callback={getValue} addEnter={addEnter} />
            <Button body={'Add'} callback={addNewPost}/>
            <Button body={'Clear All'} callback={clearAll} />
            <Button body={'Clear done'} callback={clearDone}/>
            <Button body={'Clear undone'} callback={clearUndone}/>
        </div>
    )
}

export default AddTask;