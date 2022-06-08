import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import "../styles/PostItem.css";
import ModalWindow from "./ModalWindow";

const ListItem = ({
  post,
  patchChangeTask,
  patchCheckTask,
  deleteTasks,
}) => {

  const [modal, setModal] = useState(false);
  const [modalValue, setModalValue] = useState(post.name);
  const [editing, setEditing] = useState(true);
  const [inpEditing, setInpEditing] = useState(post.name);

  const toggleCheck = (e, uuid) => {
    patchCheckTask(e, uuid);
  };

  const deletePosts = () => {
    deleteTasks(post, post.uuid);
  };

  const editingTask = () => {
    setInpEditing(post.name)
    setEditing(false);
  };

  const saveTask=(e,uuid)=>{
    if(e.key==='Enter' || e.type==='blur' ||e.key==='Escape'){
      e.key!=='Escape' && patchChangeTask(inpEditing, uuid);
      setEditing(true)
    }
  }

  const modalWindow = (e) => {
    e.stopPropagation();
    setModalValue(post.name);
    setModal(true);
  };

  return (
    <li className="task">
      <ModalWindow
        modalValue={modalValue}
        setModalValue={setModalValue}
        visible={modal}
        setVisible={setModal}
        post={post}
        patchChangeTask={patchChangeTask}
      />
      <Input
        type={"checkbox"}
        classStyle={"flag"}
        checked={post.done}
        callback={(e) => toggleCheck(e, post.uuid)}
      />
      {editing ? (
        <span className="todo" onClick={editingTask}>
          {post.name.length < 15 ? (
            post.name
          ) : (
            <>
              {post.name.substring(0, 10)}
              <Button
                body={"..."}
                callback={modalWindow}
              />
            </>
          )}
        </span>
      ) : (
        <input
          autoFocus
          onBlur={(e) => saveTask(e, post.uuid)}
          onKeyDown={(e) => saveTask(e, post.uuid)}
          value={inpEditing}
          onChange={(e)=>setInpEditing(e.target.value)}
          style={{ width: "39%",marginLeft:"3%" }}
        />
      )}
      <span className="date">{post.createdAt.substring(0,10)}</span>
      <Button body={"Delete"} callback={deletePosts} />
    </li>
  );
};

export default ListItem;