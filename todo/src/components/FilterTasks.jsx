import "../styles/FilterTasks.css";
import Button from "./Button";

const FilterTasks = ({ posts, filter, setFilter, sort, setSort }) => {
  const DONE = "done";
  const UNDONE = "undone";

  return (
    <div className="filter__tasks">
      <Button
        body={"All"}
        locked={filter === "all"}
        callback={() => {
          setFilter("all");
        }}
      />
      <Button
        body={DONE}
        locked={filter === DONE || posts.length === 0}
        callback={() => {
          setFilter(DONE);
        }}
      />
      <Button
        body={UNDONE}
        locked={filter === UNDONE || posts.length === 0}
        callback={() => {
          setFilter(UNDONE);
        }}
      />
      <Button
        body={sort}
        locked={posts.length < 2}
        callback={() => setSort((prev) => (prev === "new" ? "old" : "new"))}
      />
    </div>
  );
};

export default FilterTasks;
