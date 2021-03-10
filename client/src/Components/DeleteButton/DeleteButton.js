import React from "react";
import "./style.css";

function DeleteButton(props) {
  return (
    <span
      className="btn btn-danger delete-btn"
      {...props}
      role="button"
      tabIndex="0"
    >
      Delete
    </span>
  );
}

export default DeleteButton;
