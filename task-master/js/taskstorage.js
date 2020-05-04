let myStorage = window.localStorage;

let tasks = [];

function idgenerator() {
    let timestamp = new Date();

    let id = timestamp.getHours().toString() +
        timestamp.getMinutes().toString() +
        timestamp.getSeconds().toString() +
        timestamp.getMilliseconds().toString();

    return id;
}

function createTask(taskDescription, titleDescription) {

    let task = {
        id: idgenerator(),
        data: {
            title: titleDescription,
            description: taskDescription,
            
        },

    }

    tasks.push(task);
    myStorage.setItem("tasks", JSON.stringify(tasks));

};



function deleteTask(id) {

    tasks = tasks.filter(task => task.id != id);
    myStorage.setItem("tasks", JSON.stringify(tasks));

    // updateScreen();
}

function loadTasks() {
    let tasks_str = myStorage.getItem("tasks");

    if (tasks_str) {
        tasks = JSON.parse(tasks_str);
    }
}