const alert = document.querySelector('#validation-alert');
const button = document.querySelector('#btn-submit');
const form = document.querySelector('#task-form');

form.addEventListener("change", validFormFieldInput)

function validFormFieldInput(data) {

const newTaskNameInput = document.querySelector('#taskName');
const taskName = newTaskNameInput.value;
console.log("name:  "+ taskName);

const newTaskDescription = document.querySelector('#taskDescription');
console.dir(newTaskDescription);
const taskDescription = newTaskDescription.value;
console.log("task description:  " + taskDescription);

const newAssignedTo = document.querySelector('#assignedTo');
const assignedTo = newAssignedTo.value;
console.log("assigned to:  " + assignedTo);

const newDueDate = document.querySelector('#dueDate');
const dueDate = newDueDate.value;
console.log("due date:  " + dueDate);
}

const onClick = () => alert.style.display = form.checkValidity() ? 'none' : 'block'; 
button.addEventListener('click', onClick);

