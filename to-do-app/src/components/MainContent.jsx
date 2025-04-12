import React from "react"

export default function MainContent() {

const [tasks, setTasks] = React.useState([]);
const [newTask, setNewTask] = React.useState('');

function handleChange(event) {
  setNewTask(event.currentTarget.value);
  console.log(newTask);
}

  return(
    <section>
      <div className="input-group">
        <input 
          type="text" 
          placeholder="Write your task here"
          value={newTask}
          onChange={handleChange}
        />
        <button onClick={addTask}>+</button>
      </div>


    </section>
  )
}