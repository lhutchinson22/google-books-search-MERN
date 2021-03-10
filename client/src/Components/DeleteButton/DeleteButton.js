import React from "react";

function DeleteButton(props) {
  return (
    <span className="btn btn-danger" {...props} role="button" tabIndex="0">
      Delete
    </span>
  );
}

export default DeleteButton;
