function newTask() {

    let taskDescription = document.getElementById("newTask").value;
    let titleDescription = document.getElementById("newTitle").value;
    
    createTask(taskDescription, titleDescription);
    updateScreen();

}



function updateScreen() {

    let list = "<ul class=tilesWrap >"

    tasks.forEach((task => {
        list += "<li id-data=" + task.id + ">" 
        list += "<h2>" + 00 + "</h2>" 
        list += "<h3>" + task.title + "</h3>" 
        list += "<p>" + task.data.description + "</p>" 
        list += "<button onclick=removeTask(this) id=remove id-data=" + task.id + "> Apagar</button>"
        list += "</li>"
    
    }));

    list += "</ul>";

    document.getElementById("list").innerHTML = list;

}

function removeTask(element) {

    let id = element.getAttribute("id-data");

    deleteTask(id);
    updateScreen();
}