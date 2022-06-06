import React, { useState, useEffect } from "react";
import AddTask from "../components/AddTask";
import FilterTasks from "../components/FilterTasks";
import Header from "../components/Header";
import Pagination from "./Pagination";
import { http } from "../api/http";
import PostList from "./PostList";

const WrapperToDo = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("new");
  const [page, setPage] = useState(1);
  const [countPage, setCountPage] = useState(0);

  const getTasks = async () => {
    try {
      const response = await http.get(
        `postTask/?filter=${filter}&sort=${sort}&page=${page}&limit=${5}`
      );
      setPosts(response.data.result);
      const count = response.data.countPage;
      setCountPage(Math.ceil(count/ 5));
    } catch (err) {
      console.log('Ошибка гет запрсоа',err);
    }
  };

  const postTasks = async (obj) => {
    try {
      await http.post("postTask/", obj);
    } catch (err) {
      alert(err.response);
    }
  };

  const patchChangeTask = async (newValue, uuid) => {
    try {
      await http.patch(`postTask/${uuid}`, { name: newValue });
    } catch (err) {
      alert(`Ошибка редактирования задачи: ${err}`);
    }
    getTasks()
  };

  const patchCheckTask = async (e, uuid) => {
    try {
      await http.patch(`postTask/${uuid}`, {
        done: e.target.checked
      });
    } catch (err) {
      alert(err);
    }
    getTasks()
  };

  const deleteTasks = async (obj, uuid) => {
    try {
      await http.delete(`postTask/${uuid}`, obj);
      await getTasks();
    } catch (err) {
      alert(err);
    }

    console.log(posts.length)
    
  };

  const deleteAllTasks = async () => {
    try {
      await http.post(`postTask/deleteAll`, []);
    } catch (err) {
      alert(err);
    }
    getTasks();
  };

  const deleteCheckTasks = async (obj) => {
    try {
      await http.post(`postTask/deleteDone`,obj);
    } catch (err) {
      alert(err);
    }

    getTasks();
  };

  const deleteUncheckTasks = async (obj) => {
    try {
      await http.post(`postTask/deleteUndone`,obj);
    } catch (err) {
      alert(err);
    }
    getTasks();
  };

  useEffect(() => {
    if (posts.length === 0 && page > 1) {
      setPage(page - 1);
    }
  }, [posts]);

  useEffect(() => {
    setPage(1);
  }, [filter]);

  useEffect(() => {
    getTasks();
  }, [filter, sort, page]);

  return (
    <div>
      <Header />
      <AddTask
        posts={posts}
        postTasks={postTasks}
        getTasks={getTasks}
        deleteAllTasks={deleteAllTasks}
        deleteCheckTasks={deleteCheckTasks}
        deleteUncheckTasks={deleteUncheckTasks}
      />
      <FilterTasks filter={filter} setFilter={setFilter} setSort={setSort} />
      <PostList
        posts={posts}
        patchCheckTask={patchCheckTask}
        patchChangeTask={patchChangeTask}
        deleteTasks={deleteTasks}
      />
      <Pagination
        page={page}
        setPage={setPage}
        countPage={countPage}
      />
    </div>
  );
};

export default WrapperToDo;