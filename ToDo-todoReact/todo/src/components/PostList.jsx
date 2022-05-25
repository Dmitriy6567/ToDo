import React from "react";
import ListItem from "./ListItem";
import '../styles/PostList.css'

const PostList = ({posts, setPosts, page, patchChangeTask,patchCheckTask, deleteTasks,getTasks}) => {

    const limit=5

    return(
        <ul className="post__list">
            {posts.length?  
            posts.map((post,index)=>
                (index>=(page-1)*limit && index<page*limit) &&
                <ListItem posts={posts} post={post} setPosts={setPosts} patchChangeTask={patchChangeTask} patchCheckTask={patchCheckTask} 
                deleteTasks={deleteTasks} getTasks={getTasks}/>
                
        ) 
            : <h2>Нет записей!</h2>}
        </ul>
    )
}

export default PostList;