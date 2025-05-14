import React from "react";
import { motion, AnimatePresence } from 'framer-motion';

export default function MainContent() {

const [tasks, setTasks] = React.useState(() => {
  const storedTasks = localStorage.getItem('tasks');
  return storedTasks ? JSON.parse(storedTasks) : []
});
const [newTask, setNewTask] = React.useState('');

React.useEffect(() => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}, [tasks]);

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

function handleKeyDown(event) {
  if(event.key == 'Enter'){
    addTask();
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

  return(
    <section>
      <div className="input-group">
        <input 
          type="text" 
          placeholder="Write your task here"
          value={newTask}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <button onClick={addTask}>Add</button>
      </div>
      
      <ul>
        <AnimatePresence>
          {tasks.map(task => (
            <motion.li 
              key={task.id} 
              className="task-item"
              initial={{ opacity: 0, y: -10}}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10}}
              transition={{ 
                duration: 0.5,
                exit: { duration: 0.1}
              }}
            >
              <label className="checkbox-label">
                <img 
                  className='checked-img' 
                  onClick={() => toggleChange(task.id)}
                  src={task.completed ? 
                    "src/assets/circle.png" : 
                    "src/assets/checkbox.png"}
                />
                <span 
                  className={task.completed ? "completed" : ''}
                  onClick={() => toggleChange(task.id)}
                >
                  {task.text}
                </span>
              </label>
              <button className="delete-btn" onClick={() => deleteTask(task.id)}>
                ✕
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </section>
  )
}