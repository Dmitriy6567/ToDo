import React from "react";
import ListItem from "./ListItem";
import '../styles/PostList.css'

const PostList = ({posts, setPosts}) => {

    return(
        <ul className="post__list">
            {posts.length?  
            posts.map(post=>
                <ListItem key={post.id} posts={posts} post={post} setPosts={setPosts}/>
                ) 
            : <h1 style={{textAlign: 'center'}}>Нет записей!</h1>}
        </ul>
    )
}

export default PostList;