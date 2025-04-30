import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  console.log("Tasks:", tasks); 
  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <Task
          key={task.id ?? index} 
          text={task.text}
          category={task.category}
          onDelete={onDeleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;