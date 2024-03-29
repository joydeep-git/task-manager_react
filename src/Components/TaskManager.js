import "../CSS/taskManager.css";
import { useState, useEffect } from "react";
import Task from "./Task";
import AddTask from "./AddTask";
import { db } from "../firebase/firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

function TaskManager() {

  const [openAddModel, setOpenAddModel] = useState(false);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const taskColRef = query(
      collection(db, "tasks"),
      orderBy("created", "desc")
    );

    onSnapshot(taskColRef, (snapshot) => {
      setTasks(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  return (
    <div className="taskManager">

      <header>Task Manager</header>

      <div className="taskManager_container">

        <button onClick={() => setOpenAddModel(true)} className="addTaskBtn"><b>Add task +</b></button>

        <div className="taskManager_tasks">
          {tasks.map((task) => (
            <Task
              key={task.id}
              id={task.id}
              title={task.data.title}
              description={task.data.description}
              completed={task.data.completed}
            />
          ))}
        </div>
      </div>

      {openAddModel && (
        <AddTask onClose={() => setOpenAddModel(false)} open={openAddModel} />
      )}

    </div>
  );
}
export default TaskManager;