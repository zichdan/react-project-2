import { useState } from "react"


const AddTask = () => {
    const [text, setTask] = useState('')
    const [day, setDay] = useState('')
    const [text, setReminder] = useState('')

  return (
    <form className="add-form">
        <div className="form-control">
            <label>Task</label>
            <input type="text" placeholder="Add Task" className="" />
        </div>

        <div className="form-control">
            <label>Date & Time</label>
            <input type="text" placeholder="Add Day & Time" />
        </div>

        <div className="form-control form-control-check">
            <label >Set reminder</label>
            <input type="checkbox" />
        </div>
        <input type="button" value="Save Task" className="btn btn-block" />

    </form>

  )
}

export default AddTask
