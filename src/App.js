import { useEffect, useLayoutEffect, useState } from "react"
import Header from "./components/Headers"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"


function App() {
  const [ showAddTask, setShowAddTask] = 
  useState(false)
  const [tasks, setTasks] = useState([])


  useEffect (() => {
    const fetchTask = async () => {
      const req = await fetch ( 'http://localhost:5000/tasks')
      const data = await req.json()

      console.log(data);
    }

    fetchTask()
  }, [])

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

