import Task from "./Task";

const Tasks = ({tasks, onDelete}) => {

  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete}/>
      ))}
    </>
  );
};

export default Tasks





// const Tasks = () => {
    //   return (
    //     <>
    //     <h1>Tasks</h1>
    //     {tasts.map(task =>{
    //         if(task.reminder === "True"){
    //             console.log("Reminder");
    //         }else{
    //             console.log("No Reminder");
    //             }
    //         return (
    //                 <div key={task.id}>
    //                 <p>{task.name}</p>
    //                     <p>{task.text}</p>
    //                     <p>{task.day}</p>
    //                     <p>{task.description}</p>
    //                     </div>
    //                     )})}
    //                     </>
    //   )
    // }











// const tasks = [
//     { id: '1', name: 'task one' },
//     { id: '2', name: 'task two' }
//     ];
//     const taskList = document.getElementById('tasks');
//     function renderTasks() {
//         let html = '';
//         for (let i=0;i<tasks.length;i++) {
//             html += `<li>${tasks[i].name}</li>`;
//             };
//             taskList.innerHTML = html;
//             };
//             renderTasks();

            
// ]
