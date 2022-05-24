import React from "react";
import ListItem from "./ListItem";
import '../styles/PostList.css'

const PostList = ({posts, setPosts, page}) => {

    const limit=5

    return(
        <ul className="post__list">
            {posts.length?  
            posts.map((post,index)=>
                (index>=(page-1)*limit && index<page*limit) &&
                <ListItem key={post.uuid} post={post} setPosts={setPosts}/>
                
        ) 
            : <h2>Нет записей!</h2>}
        </ul>
    )
}

export default PostList;