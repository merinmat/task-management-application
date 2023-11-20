import { useState } from "react";

import { FaTrash, FaPenToSquare } from "react-icons/fa6";

import { alltasks } from "../style";

const TaskItem = ({ task, toggleTask, delTask, update }) => {
  const [showedit, setShowEdit] = useState(false);
  const [updateTask, setUpdateTask] = useState(task.text);

  const styling = {
    text: task.completed ? "line-through" : "none ",
  };

  const handleToggle = () => {
    toggleTask(task.id);
  };

  const handleChange = (e) => {
    setUpdateTask(e.target.value);
  };

  const handleEdit = () => {
    setShowEdit(true);
  };

  const handleUpdatedValue = (evt) => {
    if (evt.key === "Enter") {
      update(updateTask, task.id);
      setShowEdit(false);
    }
  };

  const handleDelete = () => {
    delTask(task.id);
  };

  return (
    <div className="flex justify-center ">
      {showedit ? (
        <input
          className={`${alltasks.tasks} italic`}
          type="text"
          value={updateTask}
          onChange={handleChange}
          onKeyDown={handleUpdatedValue}
        />
      ) : (
        <div className={`${alltasks.tasks}`}>
          <li style={{ textDecoration: styling.text }} onClick={handleToggle}>
            {task.text}
          </li>
        </div>
      )}

      <div className="flex justify-center items-center">
        <div className="m-2 cursor-pointer">
          <FaPenToSquare onClick={handleEdit} title="Edit" />
        </div>
        <div className="m-2 cursor-pointer">
          <FaTrash onClick={handleDelete} title="Delete" />
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
