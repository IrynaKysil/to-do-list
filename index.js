


document.querySelector('#studentform').addEventListener("change", validFormFieldInput)

function validFormFieldInput(data) {
console.log(data);


const newTaskNameInput = document.querySelector('#taskName');
const taskName = newTaskNameInput.value;
console.log("name:  "+ taskName);

const newTaskDescription = document.querySelector('#taskDescription');
const taskDescription = newTaskDescription.value;
console.log("description:  "+ taskDescription);

const newAssignedTo = document.querySelector('#assignedTo');
const assigneTo = newAssignedTo.value;
console.log("assigne:  "+ assigneTo);


const newDueDate = document.querySelector('#dueDate');
const dueDate = newDueDate.value;g
console.log("due date:  " + dueDate);
}


