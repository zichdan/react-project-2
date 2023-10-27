import { useEffect, useState } from "react"
import Header from "./components/Headers"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"


function App() {
  const [ showAddTask, setShowAddTask] = 
  useState(false)
  const [tasks, setTasks] = useState([])


  useEffect (() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  // Fetch Task
  const fetchTasks = async () => {
    const res = await fetch ( 'https://musical-space-spoon-wq6r6rq4grwhgq6p-5000.app.github.dev/tasks')
    const data = await res.json()

    return data
  }


  // Add Task
  const addTask = async(task) => {
    const res = await fetch
    ('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type':'application/json'
      },
      body: JSON.stringify(task),
    })
    const data = await res.json()
    setTasks ([...tasks, data])

  }
        // const id = Math.floor(Math.random() * 
        // 10000) + 1
        // const newTask ={ id, ...task }
        // setTasks([...task, newTask])

  // delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    }) 

    setTasks(tasks.filter((task) => task.id !== 
    id))
  }

  // TOGGLE REMINDER
  const toggleReminder = async(id) => {
    const taskToToggle = await fetchTasks(id)
    const uptTask = { ...taskToToggle, 
    reminder: !taskToToggle.reminder}
    
    const res = await fetch(`http://
    localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': "application/json"
      },
      body: JSON.stringify(uptTask)
    })

    const data = await res.json()

      setTasks(
      tasks.map((task) =>
      task.id === id ? {...task, reminder:
      data.reminder} : task
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

