import React,{useState, useMemo} from "react";
import AddTask from "../components/AddTask";
import FilterTasks from "../components/FilterTasks";
import Header from "../components/Header";
import Tasks from "../components/Tasks";

const WrapperToDo = () => {

    const [posts, setPosts] = useState([
      {id:1,body:'Дело 1' ,date:'03/07/22', isCheck: false},
      {id:2,body:'Дело 2' ,date:'08/07/22', isCheck: false}
    ])

    const [filter, setFilter] = useState("all")

    const filterList = useMemo(()=>{
      switch(filter){
          case 'checked':
              return posts.filter(post => post.isCheck===true)
          case 'unchecked':
              return posts.filter(post => post.isCheck===false)
          case 'all':
              return posts
      }
  },[posts,filter])
      
    return(
        <div>
            <Header/>
            <AddTask posts={posts} setPosts={setPosts}/>
            <FilterTasks posts={filterList} setFilter={setFilter}/>
            <Tasks posts={filter} setPosts={setFilter}/>
        </div>
    )
}

export default WrapperToDo;