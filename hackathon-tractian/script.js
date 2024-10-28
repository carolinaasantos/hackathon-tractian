const inputBox1 = document.getElementById("input-box1");
const inputBox2 = document.getElementById("input-box2");
const listContainer1 = document.getElementById("list-container1");
const listContainer2 = document.getElementById("list-container2");

function addTask() {
    if (inputBox1.value === '') {
        alert("You must write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox1.value;
        listContainer1.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox1.value = "";
    saveData();
}

function addEquipment() {
    if (inputBox2.value === '') {
        alert("You must write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox2.value;
        listContainer2.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox2.value = "";
    saveData();
}

listContainer1.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData()
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData()
    }
}, false);

listContainer2.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData()
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer1.innerHTML = localStorage.getItem("data");
}
showTask();

function showTask() {
    listContainer2.innerHTML = localStorage.getItem("data");
}
showTask();

function processData() {

}

/*const todos = [
    {
        'check': true,
        'name': 'Danilo',
    },
    {
        'check': true,
        'name': 'Danilo',
    },
    {
        'check': true,
        'name': 'Danilo',
    },
    {
        'check': true,
        'name': 'Danilo',
    }
]

todos.map((item) => {
    item.name
})*/