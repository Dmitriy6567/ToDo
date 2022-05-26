import React, { useState, useEffect } from "react";
import AddTask from "../components/AddTask";
import FilterTasks from "../components/FilterTasks";
import Header from "../components/Header";
import Tasks from "../components/Tasks";
import Pagination from "./Pagination";
import { http } from "../api/http";

const WrapperToDo = () => {
  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState("");

  const [sorted, setSorted] = useState("asc");

  const [page, setPage] = useState(1);

  const postTasks = async (obj) => {
    try {
      const resp = await http.post("task/1", obj);
      console.log(resp);
    } catch (err) {
      console.error(err, 1);
    }
  };

  const patchChangeTask = async (newValue, uuid) => {
    try {
      const resp = await http.patch(`/task/1/${uuid}`, { name: newValue });
      console.log(resp);
    } catch (err) {
      console.log(err);
    }
    getTasks();
  };

  const patchCheckTask = async (e, uuid) => {
    console.log(e.target.checked);
    try {
      const resp = await http.patch(`/task/1/${uuid}`, {
        done: e.target.checked,
      });
      console.log(resp);
    } catch (err) {
      console.log(err);
    }
    getTasks();
  };

  const deleteTasks = async (obj, uuid) => {
    try {
      const resp = await http.delete(`/task/1/${uuid}`, obj);
      console.log(resp);
    } catch (err) {
      console.log(err);
    }
    getTasks();
  };

  const deleteAllTasks = async () => {

    const arr = posts.map(({uuid}) => http.delete(`/task/1/${uuid}`))

      try{
        const resp = await Promise.all(arr)
        console.log(resp)
      }
      catch(err){
          console.log(err)
      }
     getTasks()
  }

  const deleteCheckTasks = async () => {
    const arr = posts.filter((post) => post.done === true);
    const filterPosts = arr.map(({ uuid }) => http.delete(`/task/1/${uuid}`));

    try {
      const resp = await Promise.all(filterPosts);
      console.log(resp);
    } catch (err) {
      console.log(err);
    }
    getTasks();
  };

  const deleteUncheckTasks = async () => {
    const arr = posts.filter((post) => post.done === false);
    const filterPosts = arr.map(({ uuid }) => http.delete(`/task/1/${uuid}`));

    try {
      const resp = await Promise.all(filterPosts);
      console.log(resp);
    } catch (err) {
      console(err);
    }
    getTasks();
  };

  const getTasks = async () => {
    try {
      const response = await http.get(
        `/tasks/1?pp=5&page=1&order=${sorted}&filterBy=${filter}`
      );
      const arr = response.data.tasks;
      setPosts((prev) => (prev = arr));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTasks();
  }, [filter, sorted]);

  return (
    <div>
      <Header />
      <AddTask
        posts={posts}
        setPosts={setPosts}
        postTasks={postTasks}
        getTasks={getTasks}
        deleteAllTasks={deleteAllTasks}
        deleteCheckTasks={deleteCheckTasks}
        deleteUncheckTasks={deleteUncheckTasks}
      />
      <FilterTasks
        filter={filter}
        setPage={setPage}
        setFilter={setFilter}
        sorted={sorted}
        setSorted={setSorted}
      />
      <Tasks
        posts={posts}
        setPosts={setPosts}
        page={page}
        patchCheckTask={patchCheckTask}
        patchChangeTask={patchChangeTask}
        deleteTasks={deleteTasks}
        getTasks={getTasks}
      />
      <Pagination amountTask={filter.length} page={page} setPage={setPage} />
    </div>
  );
};

export default WrapperToDo;
