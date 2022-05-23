import React, {useState} from "react";
import Button from "./Button";
import '../styles/ModalWindow.css'

const ModalWindow = ({task, visible, setVisible, post, setPosts}) => {

    console.log(task) // текст задачи

    const rootClasses = ['modal-window']

    const [modalValue, setModalValue] = useState (task)

    visible && rootClasses.push('active')

    const saveTask = () => {
        setPosts(prev =>
            prev.map(el =>
                el.id === post.id ?
                {...el,body: modalValue}:
                el))
        setVisible(false)
    }

    const closeEditing = () => {
        setVisible(false)
    }

    return(
        <div className={rootClasses.join(' ')}>
            <div className="modal-content">
                <textarea value={modalValue} onChange={e=> setModalValue(e.target.value)}/>
                <Button body={'Save'} callback={saveTask}/>
                <Button body={'Close'} callback={closeEditing}/>
            </div>
        </div>
    )
}

export default ModalWindow;