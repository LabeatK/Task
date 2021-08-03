// import React from 'react'
import { useState } from "react";
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"



const App = () => {
  const[showAddTask,setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
     id:1,
     text: 'React Fundamentals',
     day: '1st of July at 10:00am',
     reminder: true,
    },
    {
        id:2,
        text: 'Meeting with John',
        day: '6th of July at 11:00am',
        reminder: true,
   },   
   {
    id:3,
    text: 'Shopping',
    day: '7th of July at 6:00pm',
    reminder: false,
    },
  ])
  //add Task
const addTask = (task) =>{

  const id = Math.floor(Math.random() *
  
  1000) + 1

  const newTask = {id, ...task}
  setTasks([...tasks,newTask])
}

  //delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks( tasks.map((task) => task.id === id ? 
    {...task.reminder} : task))
  }


  return (
    <div className="container">
      <Header onAdd = {() =>setShowAddTask (!showAddTask)} 
      showAddTask = {showAddTask}/>
      {showAddTask && <AddTask onAdd = {addTask}/>}
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} 
      onDelete= {deleteTask} 
      onToggle = {toggleReminder}/>
      ) : (
        'No Task To Show'
      )}
    </div>
  );
}

export default App;
