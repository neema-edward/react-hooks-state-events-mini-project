import React from "react";

function Task({ text, category, onDelete }) {
  const handleDelete = () => {
    console.log("Delete button clicked for task:", text); // Debug
    console.log("onDelete function:", onDelete);
    onDelete(); 
  };

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>
        X
      </button>
    </div>
  );
}

export default Task;
