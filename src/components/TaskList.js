import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  console.log("Tasks:", tasks); // Debug: Log tasks
  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <Task
          key={task.id ?? index} // Fallback to index if id is missing
          text={task.text}
          category={task.category}
          onDelete={() => onDeleteTask(task.id)}
        />
      ))}
    </div>
  );
}

export default TaskList;