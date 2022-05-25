import React,{useState, useMemo, useEffect} from "react";
import AddTask from "../components/AddTask";
import FilterTasks from "../components/FilterTasks";
import Header from "../components/Header";
import Tasks from "../components/Tasks";
import Pagination from "./Pagination";
import {http} from "../api/http";

const WrapperToDo = () => {

    const [posts, setPosts] = useState([])

    const [filter, setFilter] = useState("all")

    const [sorted, setSorted] = useState('Sort by date')

    const [page, setPage] = useState(1)

    const postTasks = async (obj) => {
        try {
        const resp = await http.post('task/1',  obj );
        console.log(resp);
        } catch (err) {
            console.error(err, 1);
            }
        };

    const patchChangeTask = async (newValue, uuid) =>  {
        
        try {
            const resp = await http.patch(`/task/1/${uuid}`, {name: newValue})
            console.log(resp)
        }catch(err) {
            console.log(err)
        }
    }

    const patchCheckTask = async (e, uuid) => {
        
        try{
            const resp = await http.patch(`/task/1/${uuid}`, {done: e.target.checked})
            console.log(resp)
        }
        catch(err){
            console.log(err);
        }
    }

    const deleteTasks = async (obj,uuid) => {
        try{
            const resp = await http.delete(`/task/1/${uuid}`, obj)
            console.log(resp)
        }
        catch(err){
            console.log(err);
        }
    }

    const getTasks = async () =>{
        try{
            const response = await http.get('/tasks/1?order=asc&pp=5&page=1')
            const arr = response.data.tasks
            console.log('Массив',arr);
            setPosts(arr)
        }
        catch(err){
            console.log(err)
        }
    }

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

  useEffect (()=>{
    getTasks()
},[filter])
console.log(posts)
    return(
        <div>
            <Header/>
            <AddTask posts={posts} setPosts={setPosts} postTasks={postTasks}/>
            <FilterTasks filter={filter} setPage={setPage} setFilter={setFilter} sorted={sorted} setSorted={setSorted}/>
            <Tasks posts={reverseAndFilterPosts} setPosts={setPosts} page={page} 
            patchCheckTask={patchCheckTask} patchChangeTask={patchChangeTask} deleteTasks={deleteTasks}/>
            <Pagination amountTask={filterList.length} page={page} setPage={setPage} />
        </div>
    )
}

export default WrapperToDo;