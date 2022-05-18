import React from "react";
import ListItem from "./ListItem";
import '../styles/PostList.css'

const PostList = ({posts, setPosts}) => {

    return(
        <ul className="post__list">
            {posts.length?  
            posts.map(post=>
                <ListItem key={post.id} post={post} setPosts={setPosts}/>
                ) 
            : <h2>Нет записей!</h2>}
        </ul>
    )
}

export default PostList;