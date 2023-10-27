import { useState } from "react"
import Header from "./components/Headers"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"


function App() {
  const [ showAddTask, setShowAddTask] = 
  useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
        name: "Tast1",
        text : "Learning React Js",
        day: 'Oct 22 at 5:55pm',
        reminder: "true",
        description:"This is the first React Js Lesson"
       },
       {
        id: 2,
        name: "Tast2",
        text : "Learning Next Js",
        day: "Oct 23 at 10:00am",
        reminder: "true",
        description:"This is the first First Next Js Lesson"
       },
       {
        id: 3,
        name: "Tast3",
        text : "Learning Django",
        day: 'Oct 24 at 7:00am',
        reminder: "False",
        description:"This is the first Django lesson to Be missed!!!"
      },
  ])


  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 
    10000) + 1
    const newTask ={ id, ...task }
    setTasks([...task, newTask])
  }

  // delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== 
    id))
  }

  // TOGGLE REMINDER
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
      task.id === id ? {...task, reminder:
      !task.reminder} : task
      )
    )
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask
      (!showAddTask)}  showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} 
      />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete=
        {deleteTask} onToggle={toggleReminder} />
      ) : (
        'No Tasks To Show'
      )}
    </div>
  );
};

export default App

