import React from "react";
import { useState } from "react";
import "../CSS/TaskManager.css";
function TaskManager() {

    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: "dummy title 1",
            description: "dummy description 1",
            completed: false,
        },
        {
            id: 2,
            title: "dummy title 2",
            description: "dummy description 2",
            completed: false,
        },
        {
            id: 3,
            title: "dummy title 3",
            description: "dummy description 3",
            completed: false,
        },
    ])

    return (
        <div className="TaskManager">
            <header>Task Manager</header>

            <div className="taskManager_container">
                <button>Add task+</button>

                <div className="taskManager_tasks">
                    {tasks.map((task)=>{
                        task.id
                    })}
                </div>
            </div>
        </div>
    )
}
export default TaskManager;