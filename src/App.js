import React from "react";
import { useState } from "react";

import Task from "./Components/Task";
import StatusLine from "./Components/StatusLine";

import "./CSS/App.css";

function App() {
  return (
    <div className="App">
      <h3>Task Manager</h3>

      <main>
        <statusLine 
        task={tasks}
        addTask={addTask} 
        addEmptyTask={addEmptyTask}
        moveTask={moveTask}
        deleteTask={deleteTask}
        status={backlog} />

        <StatusLine 
        task={tasks}
        addTask={addTask} 
        addEmptyTask={addEmptyTask}
        moveTask={moveTask}
        deleteTask={deleteTask}
        status={inProgress} />
        
        <StatusLine 
        task={tasks}
        addTask={addTask} 
        addEmptyTask={addEmptyTask}
        moveTask={moveTask}
        deleteTask={deleteTask}
        status={done} />
        
      </main>
    </div>
  );
};
export default App;