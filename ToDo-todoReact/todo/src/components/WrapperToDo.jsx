import React,{useState, useMemo} from "react";
import AddTask from "../components/AddTask";
import FilterTasks from "../components/FilterTasks";
import Header from "../components/Header";
import Tasks from "../components/Tasks";

const WrapperToDo = () => {

    const [posts, setPosts] = useState([])

    const [filter, setFilter] = useState("all")

    const [sorted, setSorted] = useState('Sort by date')

    const filterList = useMemo(()=>{

        switch(filter){
            case 'checked':
               return posts.filter(post => post.isCheck===true)
            case 'unchecked':
                return posts.filter(post => post.isCheck===false)
            default:
                return posts
        }
      
  },[posts,filter])
  const reverseAndFilterPosts = sorted==='new'? [...filterList].reverse() : filterList
    return(
        <div>
            <Header/>
            <AddTask posts={posts} setPosts={setPosts}/>
            <FilterTasks filter={filter} setFilter={setFilter} sorted={sorted} setSorted={setSorted}/>
            <Tasks posts={reverseAndFilterPosts} setPosts={setPosts}/>
        </div>
    )
}

export default WrapperToDo;