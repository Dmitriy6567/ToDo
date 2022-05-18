import React, {useState} from "react";

const Test = () => {

    const [posts, setPost] = useState([
        {id: 1, check: false},
        {id: 2, check: false}
    ])

    function edit(){
        setPost(posts.map(post=>post={...post,check:!post.check}))
    }

    console.log(posts)
    return(
        <div>
            <button onClick={edit}>Привет</button>
            {posts.map(post=> <input key={post.id} type="checkbox" value={post.check} checked={post.check}/>)}
        </div>
    )
}

export default Test;