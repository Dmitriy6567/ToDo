import React from "react";
import ListItem from "./ListItem";
import '../styles/PostList.css'

const PostList = ({posts, setPosts}) => {
    console.log(posts)
    return(
        <ul className="post__list">
            {posts.map(post=>
                <ListItem key={post.id}  post={post} setPosts={setPosts}/>
                )}
        </ul>
    )
}

export default PostList;