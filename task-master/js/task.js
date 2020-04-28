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
            description: taskDescription
        },
        title: titleDescription,
    }


    tasks.push(task);
    updateScreen();

};



function deleteTask(id) {

    tasks = tasks.filter(task => task.id != id);
    updateScreen();
}