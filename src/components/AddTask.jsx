import { useState } from "react";

import { styles, form } from "../style.js";

const AddTask = ({ newTask }) => {
  const [addTask, setAddTask] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    {
      addTask.length > 0
        ? newTask(addTask)
        : alert("Sorry, the field cannot be empty!");
    }

    setAddTask("");
  };

  return (
    <div>
      <div className="flex justify-center items-center flex-col">
        <h1 className={`${styles.title} m-4`}>Add New Task</h1>
        <form onSubmit={handleSubmit} className={`${form.input}`}>
          <input
            className="m-4 p-2 border-2 rounded-2xl placeholder:italic placeholder:text-slate-400"
            type="text"
            placeholder="add new task"
            name="addtask"
            value={addTask}
            onChange={(e) => setAddTask(e.target.value)}
          />

          <button
            className="border-2 rounded-xl m-2 max-[280px]:text-sm p-1 font-semibold bg-teal-500 text-white"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
