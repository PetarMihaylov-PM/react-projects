import React from "react"

export default function MainContent() {

const [tasks, setTasks] = React.useState([]);
const [newTask, setNewTask] = React.useState('');

function handleChange(event) {
  setNewTask(event.currentTarget.value);
}

function addTask() {
  if(newTask){

    const task = {
      id: crypto.randomUUID(),
      text: newTask.trim(),
      completed: false
    }
    setTasks(prevTasks => [...prevTasks, task]);
    setNewTask('');
  }
}

function toggleChange(id) {
  setTasks(prevTasks => 
    prevTasks.map(task => 
      task.id === id ? {...task, completed: !task.completed } : task 
    )
  );
}

function deleteTask (id) {
  setTasks(prevTasks => 
    prevTasks.filter(task => task.id !== id)
  )
}

const displayTasks = tasks.map(task => {
  return (
    <li key={task.id}>
       <label className="checkbox-label">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleChange(task.id)}
          />
          <span className={task.completed ? "completed" : ''}>{task.text}</span>
        </label>
        <button className="delete-btn" onClick={() => deleteTask(task.id)}>
          ✕
        </button>
    </li>
  )
})


  return(
    <section>
      <div className="input-group">
        <input 
          type="text" 
          placeholder="Write your task here"
          value={newTask}
          onChange={handleChange}
        />
        <button onClick={addTask}>Add</button>
      </div>
      
      <ul>
        {displayTasks}
      </ul>
      
    </section>
  )
}