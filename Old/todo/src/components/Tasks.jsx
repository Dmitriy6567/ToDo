import React from "react";
import PostList from "./PostList";
import '../styles/Tasks.css'

const Tasks = ({posts, setPosts}) => {

    return(
        <div className="tasks">
            <PostList posts={posts} setPosts={setPosts}/>
        </div>
    )
}

export default Tasks;