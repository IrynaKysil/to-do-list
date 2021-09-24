document.querySelector('#form1').addEventListener("change", validFormFieldInput)

function validFormFieldInput(data) {
console.log(data);


const newTaskNameInput = document.querySelector('#taskName');
const taskName = newTaskNameInput.value;
console.log("name:  "+ taskName);


const newTaskDescription = document.querySelector('#taskDescription');
const taskDescription = newTaskDescription.value;
console.log("task description:  " + taskDescription);

const newAssignedTo = document.querySelector('#assignedTo');
const assignedTo = newAssignedTo.value;
console.log("assigned to:  " + assignedTo);


const newDueDate = document.querySelector('#dueDate');
const dueDate = newDueDate.value;
console.log("due date:  " + dueDate);
}

