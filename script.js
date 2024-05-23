// Get the list container element
const listContainer = document.getElementById('list-container');

// Function to add a new task to the list
function addTask() {
  // Get the input box element
  const inputBox = document.getElementById('input-box');

  // Get the value of the input box
  const taskText = inputBox.value.trim();

  // Check if the input is empty
  if (taskText === '') {
    return;
  }

  // Create a new list item element
  const listItem = document.createElement('li');
  listItem.innerText = taskText;

  // Add a click event listener to the list item
  listItem.addEventListener('click', function () {
    this.classList.toggle('checked');
    saveData();
  });

  // Create a remove button element
  const removeButton = document.createElement('span');
  removeButton.innerHTML = '&times;';

  // Add a click event listener to the remove button
  removeButton.addEventListener('click', function (event) {
    event.stopPropagation(); // Prevent the list item click event from firing

    const listItem = this.parentNode; // Get the parent <li> element
    listContainer.removeChild(listItem); // Remove the <li> element from the list
  });

  // Append the remove button to the list item
  listItem.appendChild(removeButton);
  saveData();
  // Append the list item to the list container
  listContainer.appendChild(listItem);

  // Clear the input box
  inputBox.value = '';
  saveData();
}

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");


}
