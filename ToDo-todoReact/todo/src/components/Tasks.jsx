import React from "react";
import PostList from "./PostList";
import '../styles/Tasks.css'

const Tasks = ({posts, setPosts, page, patchChangeTask, patchCheckTask, deleteTasks, getTasks}) => {
    
    return(
        <div className="tasks">
            <PostList posts={posts} setPosts={setPosts} page={page} patchChangeTask={patchChangeTask} patchCheckTask={patchCheckTask} deleteTasks={deleteTasks} getTasks={getTasks}/>
        </div>
    )
}

export default Tasks;