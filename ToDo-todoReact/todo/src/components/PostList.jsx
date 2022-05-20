import React from "react";
import ListItem from "./ListItem";
import '../styles/PostList.css'

const PostList = ({posts, setPosts, page}) => {
    console.log(posts)
    console.log(page)
    // const countTasks = () =>{
    //     const start = (page-1)*5;
    //     const end = start +5;

    //     return posts.slice(start,end)
    // }

    const limit=5
    console.log((page-1)*limit )
    console.log(page*limit )
    return(
        <ul className="post__list">
            {posts.length?  
            posts.map((post,index)=>{
                (index>=(page-1)*limit && index<page*limit) &&
                <ListItem key={post.id} post={post} setPosts={setPosts}/>
                
        }) 
            : <h2>Нет записей!</h2>}
        </ul>
    )
}

export default PostList;