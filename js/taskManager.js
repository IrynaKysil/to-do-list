class TaskManager{
  constructor(currentId=0){
    this.tasks = [];
    this.currentId = currentId;
  }
  addTask(data){
    this.currentId = this.currentId + 1;
    data.id = this.currentId;
    this.tasks.push(data);
  }  
}

const form1 = document.querySelector('#form1');
const nameInput = document.querySelector('#taskName');
const descriptionInput = document.querySelector('#taskDescription');
const assignedToInput = document.querySelector('#assignedTo');
const dueDateInput = document.querySelector('#dueDate');

const taskManager = new TaskManager();

function onSubmit (event) {
  event.preventDefault();
  const name = nameInput.value;
  const description = descriptionInput.value;
  const assignedTo = assignedToInput.value;
  const dueDate = dueDateInput.value;

  const data = {name, description, assignedTo, dueDate};

  taskManager.addTask(data);
  console.log(taskManager.tasks);
};

form1.addEventListener("submit", onSubmit);

