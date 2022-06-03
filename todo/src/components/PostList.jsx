import ListItem from "./ListItem";
import "../styles/PostList.css";

const PostList = ({
  posts,
  patchChangeTask,
  patchCheckTask,
  deleteTasks,
}) => {

  return (
    <ul className="post__list">
      {posts.length ? (
        posts.map(
          (post, index) =>
            (
              <ListItem key={index}
                post={post}
                patchChangeTask={patchChangeTask}
                patchCheckTask={patchCheckTask}
                deleteTasks={deleteTasks}
              />
            )
        )
      ) : (
        <h2>Нет записей!</h2>
      )}
    </ul>
  );
};

export default PostList;