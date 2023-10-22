const tasks =[
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
   }
]



const Tasks = () => {
  return (
    <>
      {tasks.map((task) => (<h3>{task.text}</h3>))}
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
