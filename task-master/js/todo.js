function newTask() {
    if (document.getElementById("newTask").value && document.getElementById("newTitle").value) {
        let taskDescription = document.getElementById("newTask").value;
        let titleDescription = document.getElementById("newTitle").value;
        // let urgencyCheck = document.getElementById("urgency").checked;
        createTask(taskDescription, titleDescription);
        updateScreen();

    } else {

    }

}

function updateScreen() {

    let list = "<ul class=tilesWrap >"

    tasks.forEach((task => {
        console.log(tasks)
        list += "<li id-data=" + task.id + ">"
        list += "<h2>" + 00 + "</h2>"
        list += "<h3>" + task.data.title + "</h3>"
        list += "<p>" + task.data.description + "</p>"
        // list += "<button onclick=doneTask(this) id=remove id-data=" + task.id + "> Done</button>"
        list += "<button onclick=removeTask(this) id=remove id-data=" + task.id + "> Apagar</button>"
        list += "</li>"

    }));

    list += "</ul>";

    document.getElementById("list").innerHTML = list;
    document.getElementById("newTask").value = "";
    document.getElementById("newTitle").value = "";
}

function removeTask(element) {
    let id = element.getAttribute("id-data");

    deleteTask(id);
    updateScreen();
}

function doneTask() {

}

loadTasks();
updateScreen();

