let tasks = [];
let nextId = 1;

document.getElementById('submit').addEventListener('click', function () {
    // Add the task to the array
    let name = document.getElementById('task-name').value;
    let priority = document.getElementById('priority').value;
    let isImportant = document.getElementById('important').value;
    let id = nextId;
    let date = new Date();

    let newTask = {
        id,
        name,
        priority,
        isImportant,
        isCompleted: false,
        date
    }
    tasks.push(newTask);
    nextId++;

    console.log(JSON.stringify(tasks));

    updateDisplay();
})

updateDisplay = function () {
    let display = document.getElementById('taskmanager');

    // First, clear current state
    display.innerHTML = "";

    // Print the new array in the div
    for(let n = 0; n < tasks.length; n++) {
        let task = tasks[n];
        let taskDiv = document.createElement('div')
        
        taskDiv.setAttribute('id', "task-"+task.name);

        let name = document.createElement('div');
        name.innerHTML = task.name;
        taskDiv.appendChild(name);

        let priority = document.createElement('div');
        priority.innerHTML = "Priority: " + task.priority;
        taskDiv.appendChild(priority);

        let date = document.createElement('div');
        date.innerHTML = task.date.toString("MM/DD/YY");
        taskDiv.appendChild(date);

        let completed = document.createElement('input');
        completed.setAttribute('type', 'checkbox');
        
        taskDiv.appendChild(completed);

        let deleteButton = document.createElement('button');
        deleteButton.addEventListener('click', function() {
            deleteTask(task.id);
        })
        taskDiv.appendChild(deleteButton);

        display.appendChild(taskDiv);
    }

};

deleteTask = function (id) {
    tasks = tasks.filter((task) => {
        return task.id !== id;
    });
    updateDisplay();
};