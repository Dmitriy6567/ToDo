import React from "react";

const ButtonPagintion = ({ number, item, page, setPage }) => {
  return (
    <li
      onClick={() => setPage(item + 1)}
      className={item === page ? "active" : ""}
    >
      {number}
    </li>
  );
};

export default ButtonPagintion;
