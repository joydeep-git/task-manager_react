import React from "react";

import "../CSS/task.css";
import TaskItem from "./TaskItem";
import EditTask from "./EditTask";

import { useState } from "react";
import { db } from "../firebase/firebase";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";

function Task({ id, title, description, completed }) {

  const [checked, setChecked] = useState(completed);

  const [open, setOpen] = useState({ edit: false, view: false });

  const handleDelete = async () => {

    const taskDocRef = doc(db, "tasks", id);

    try {
      await deleteDoc(taskDocRef);
    } catch (error) {
      alert(error);
    }
  };

  const handleChange = async () => {
    const taskDocRef = doc(db, "tasks", id);

    try {
      await updateDoc(taskDocRef, { completed: checked });
    } catch (error) {
      alert(error);
    }
  };

  const handleClose = () => {
    setOpen({ edit: false, view: false });
  };

  return (

    <div className={`task ${checked && "task_completed"}`}>

      <div>
        <input
          id={`checkbox-${id}`}
          className="task_checkbox"
          name="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
          type="checkbox"
        />
      </div>

      <div className="task_body">

        <div className="task_data">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className="task_buttons">

          <button className="task_editButton" onClick={() => setOpen({ ...open, edit: true })}>Edit</button>
          <button className="task_deleteButton" onClick={handleDelete}>Delete</button>
          <button onClick={() => setOpen({ ...open, view: true, })}>View</button>

        </div>
      </div>

      {open.view && (
        <TaskItem
          onClose={handleClose}
          title={title}
          description={description}
          open={open.view}
        />
      )}

      {open.edit && (
        <EditTask
          onClose={handleClose}
          toEditTitle={title}
          toEditDescription={description}
          open={open.edit}
          id={id}
        />
      )}

    </div>
  );
}
export default Task;