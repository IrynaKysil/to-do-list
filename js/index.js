const alert = document.querySelector('#validation-alert');
const button = document.querySelector('#btn-submit');
const form = document.querySelector('#form1');

form.addEventListener("change", validFormFieldInput)

function validFormFieldInput(data) {

const newTaskNameInput = document.querySelector('#taskName');
const taskName = newTaskNameInput.value;
//console.log("name:  "+ taskName);

const newTaskDescription = document.querySelector('#taskDescription');
//console.dir(newTaskDescription);
const taskDescription = newTaskDescription.value;
//console.log("task description:  " + taskDescription);

const newAssignedTo = document.querySelector('#assignedTo');
const assignedTo = newAssignedTo.value;
//console.log("assigned to:  " + assignedTo);

const newDueDate = document.querySelector('#dueDate');
const dueDate = newDueDate.value;
//console.log("due date:  " + dueDate);
}

const onClick = () => alert.style.display = form.checkValidity() ? 'none' : 'block'; 
button.addEventListener('click', onClick);


const taskList = document.querySelector('#tasks-list');
taskList.addEventListener('click', (event) => { 
  //console.log(event.target.classList.contains('done-button'))
  let parentTask;
  let currentElement = event.target;
  while(currentElement){
    if (currentElement.nodeName === 'LI'){
      parentTask = currentElement;      
      break;
    } else {
      currentElement = currentElement.parentElement;
    }
  }
  
  const taskId = Number(parentTask.attributes['data-task-id'].value);
  
  if (event.target.classList.contains('done-button')) {
    const task = taskManager.getTaskById(taskId);
    task.status = 'DONE';  
    taskManager.render();
    taskManager.save();
}  

 //console.log(taskId);

 if (event.target.classList.contains('delete-button')) {
   taskManager.deleteTask(taskId);
   taskManager.save();
   taskManager.render(); 
 }

});