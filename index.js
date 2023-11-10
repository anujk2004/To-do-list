
let inputbox = document.getElementById("input-box");
let listcontainer = document.getElementById("listcontainer");

window.onload = function () {
    let storedData = localStorage.getItem("data");

    if (storedData) {
        let tasks = JSON.parse(storedData);
        tasks.forEach(task => addItem(task));
    }
}

function addItem(text) {
    let listitem = document.createElement("li");
    listitem.innerHTML = `${text}<i></i>`;

    listitem.addEventListener("click", function () {
        this.classList.toggle('done');
        savedata();
    });

    listitem.querySelector("i").addEventListener("click", function () {
        listitem.remove();
        savedata();
    });

    listcontainer.appendChild(listitem);
    savedata();
}

inputbox.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        if (inputbox.value == "") {
            alert("Please write any task");
        } else {
            addItem(this.value);
            this.value = "";
        }
    }
});

function savedata() {
    let tasks = Array.from(document.querySelectorAll("#listcontainer li")).map(item => item.textContent);
    localStorage.setItem("data", JSON.stringify(tasks));
}

