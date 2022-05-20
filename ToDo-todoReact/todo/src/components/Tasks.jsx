import React from "react";
import PostList from "./PostList";
import '../styles/Tasks.css'

const Tasks = ({posts, setPosts, page}) => {
    
    return(
        <div className="tasks">
            <PostList posts={posts} setPosts={setPosts} page={page}/>
        </div>
    )
}

export default Tasks;