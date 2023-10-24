import { useState } from "react"
import Header from "./components/Headers"
import Tasks from "./components/Tasks"


function App() {
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

  // delete Task
  const deleteTask = (id) => {
    console.log('delete', id);
  }

  return (
    <div className="container">
      <Header/>
      <Tasks  tasks={tasks} onDelete=
      {deleteTask} />
    </div>
  )
}

export default App

