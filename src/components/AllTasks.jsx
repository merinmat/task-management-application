import { useState, useEffect } from "react";
import TaskItem from "./TaskItem";
import AddTask from "./AddTask";

const initialTasks = JSON.parse(localStorage.getItem("tasks")) || [];

const AllTasks = () => {
  const [tasks, setTasks] = useState(initialTasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const newTask = (addTask) => {
    setTasks((prevTask) => {
      return [
        ...prevTask,
        { id: crypto.randomUUID(), text: addTask, completed: false },
      ];
    });
  };

  const toggleTask = (id) => {
    setTasks((prevTask) => {
      return prevTask.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      });
    });
  };

  const update = (task, id) => {
    setTasks((prevTask) => {
      return prevTask.map((t) => {
        if (t.id === id) {
          return { ...t, text: task };
        } else {
          return t;
        }
      });
    });
  };

  const delTask = (id) => {
    setTasks((prevTask) => {
      return prevTask.filter((task) => {
        if (task.id !== id) return task;
      });
    });
  };

  return (
    <div>
      <AddTask newTask={newTask} />
      <ul>
        {tasks.map((task) => {
          return (
            <TaskItem
              key={task.id}
              task={task}
              toggleTask={toggleTask}
              delTask={delTask}
              update={update}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default AllTasks;
