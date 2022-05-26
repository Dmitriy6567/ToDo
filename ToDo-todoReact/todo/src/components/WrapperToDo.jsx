import React,{useState, useEffect} from "react";
import AddTask from "../components/AddTask";
import FilterTasks from "../components/FilterTasks";
import Header from "../components/Header";
import Tasks from "../components/Tasks";
import Pagination from "./Pagination";
import {http} from "../api/http";

const WrapperToDo = () => {

    const [posts, setPosts] = useState([])

    const [filter, setFilter] = useState("")

    const [filterPosts, setFilterPost] = useState([])

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
        getTasks()
    }

    const patchCheckTask = async (e, uuid) => {
        console.log(e.target.checked)
        try{
            const resp = await http.patch(`/task/1/${uuid}`, {done: e.target.checked})
            console.log(resp)
        }
        catch(err){
            console.log(err);
        }
        getTasks()
    }

    const deleteTasks = async (obj,uuid) => {
        try{
            const resp = await http.delete(`/task/1/${uuid}`, obj)
            console.log(resp)
        }
        catch(err){
            console.log(err);
        } 
        getTasks()
    }

    const getTasks = async () =>{
        try{
            const response = await http.get(`/tasks/1?order=asc&pp=5&page=1&filterBy=${filter}`)
            const arr = response.data.tasks
            console.log('Массив',arr);
            console.log(filter)
            setPosts(prev=>prev=arr)
            // return arr
        }
        catch(err){
            console.log(err)
        }
    }

     useEffect(()=>{
        getTasks()
        // .then(response=>setFilterPost(()=>{
        //     // switch(filter){
        //     //     case 'checked':     
        //     //        return response.filter(post => post.done===true)
        //     //     case 'unchecked':
        //     //         return response.filter(post => post.done===false)
        //     //     default:
        //     //         return response
        //     // }
        // }))
        },[filter])

// const reverseAndFilterPosts = sorted==='new'? [...filterPosts].reverse() : filterPosts

console.log(posts)
    return(
        <div>
            <Header/>
            <AddTask posts={posts} setPosts={setPosts} postTasks={postTasks} getTasks={getTasks}/>
            <FilterTasks filter={filter} setPage={setPage} setFilter={setFilter} sorted={sorted} setSorted={setSorted}/>
            <Tasks posts={posts} setPosts={setFilterPost} page={page} 
            patchCheckTask={patchCheckTask} patchChangeTask={patchChangeTask} deleteTasks={deleteTasks} getTasks={getTasks} />
            <Pagination amountTask={filter.length} page={page} setPage={setPage} />
        </div>
    )
}

export default WrapperToDo;