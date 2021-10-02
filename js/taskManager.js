var createTaskHtml = ({name, description, assignedTo, dueDate, status, id}) => {
  const html = `
    <li class="list-group-item">
        <div class="card" style="width: 18rem;">
              <div class="card-body" data-task-id="${id}">
                <p class="card-text">${name}</p>
                <p class="card-text">${description}</p>
                <p class="card-text">${assignedTo}</p>
                <p class="card-text">${dueDate}</p>          
                <p class="card-text">
                    <span class="in-progress">${status}</span> 
                    <button type="button" class="btn btn-primary done-button">Mark As Done
                    </button>
                </p>
                <p class="card-text">
                  <button type="button" class="btn btn-primary">Delete</button>
                </p>                             
              </div>
        </div>
    </li>`;
  return html
};


class TaskManager{
  constructor(currentId=0, currentStatus="IN PROGRESS"){
    this.tasks = [];
    this.currentId = currentId;
    this.currentStatus = currentStatus;
  }
  addTask(data){
    this.currentId = this.currentId + 1;
    data.id = this.currentId;
    data.status = this.currentStatus;
    this.tasks.push(data);
  }
  render(){
    const tasksHtmlList = [];
    for(let i = 0; i < this.tasks.length; i++){
      const currentTask = this.tasks[i];
      const date = new Date(currentTask.dueDate);
      const formattedDate = date.toString();
      currentTask.formattedDate = formattedDate;
      const taskHtml = createTaskHtml(currentTask);
      tasksHtmlList.push(taskHtml); 
    }
    
    const tasksHtml = tasksHtmlList.join("\n");

    document.getElementById("tasks-list").innerHTML = tasksHtml;

  };    
}

const tasksHtmlList = [];

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
  
  taskManager.render();
};

form1.addEventListener("submit", onSubmit);

