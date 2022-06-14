import React, { useEffect, useState } from "react";
import "../styles/AddTask.css";
import Button from "./Button";
import Input from "./Input";

const AddTask = ({ posts, postTasks, getTasks,deleteCheckTasks, deleteUncheckTasks, deleteAllTasks }) => {
  const [task, setTask] = useState("");
  const [disableBtnAllTasks,setDisableBtnAllTasks] = useState(false)
  const [disableBtnDoneTasks,setDisableBtnDoneTasks] = useState(false)
  const [disableBtnUndoneTasks,setDisableBtnUndoneTasks] = useState(false)
  const ADD = 'Add';
  const CLEAR_ALL = 'Clear all';
  const CLEAR_DONE = 'Clear done';
  const CLEAR_UNDONE = 'Clear undone';
  const addNewPost = () => {
    const newPost = {
      name: task,
      done: false,
    };
    if (task.trim()) {
      postTasks(newPost).then(() => getTasks());
    }

    setTask("");
    
  };

  const clearAll = () => {
    deleteAllTasks(CLEAR_ALL);
  };

  const clearDone = () => {
    deleteAllTasks(CLEAR_DONE)
  };

  const clearUndone = () => {
    deleteAllTasks(CLEAR_UNDONE)
  };

  const getValue = (e) => {
    setTask(e.target.value);
  };

  const addEnter = (e) => {
    if (e.code === "Enter") {
      addNewPost();
    }
  };

  useEffect(()=>{
    if(posts.length>0){
      setDisableBtnAllTasks(false)
    } else{
      setDisableBtnAllTasks(true)
    }
    if(posts.filter(post=>post.done===true).length>0){
      setDisableBtnDoneTasks(false)
    } else {
      setDisableBtnDoneTasks(true)
    }
    if(posts.filter(post=>post.done===false).length>0){
      setDisableBtnUndoneTasks(false)
    } else {
      setDisableBtnUndoneTasks(true)
    }
  },[posts])

  return (
    <div className="add__task">
      <Input
        type={"text"}
        placeholder={"I want to..."}
        classStyle={"inp"}
        value={task}
        callback={getValue}
        addEnter={addEnter}
      />
      <Button body={ADD} callback={addNewPost}>Add</Button>
      <Button body={CLEAR_ALL} locked={disableBtnAllTasks} callback={clearAll} />
      <Button body={CLEAR_DONE} locked={disableBtnDoneTasks} callback={clearDone} />
      <Button body={CLEAR_UNDONE} locked={disableBtnUndoneTasks} callback={clearUndone} />
    </div>
  );
};

export default AddTask;