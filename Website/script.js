const input = document.getElementById("task");
const btn = document.getElementById("btn");
const list = document.getElementById("list");
const errorMsg = document.getElementById("error");

btn.addEventListener("click", function(e) {
    e.preventDefault();

    const taskText = input.value;
    
    if (taskText === "") {
        errorMsg.innerText = "Vui lòng điền công việc cần hoàn thành!";
        return;
    } else {
        errorMsg.innerText = "";
    }

    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item");
    
    const span = document.createElement("span");
    span.innerText = taskText;
    taskItem.appendChild(span);

    const btnGroup = document.createElement("div");
    btnGroup.classList.add("btn-group");

    const completeBtn = document.createElement("button");
    completeBtn.innerText = "Hoàn thành";
    completeBtn.classList.add("btn-action");
    completeBtn.onclick = function() {
        span.classList.toggle("done-text");
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Xóa";
    deleteBtn.classList.add("btn-action");
    deleteBtn.onclick = function() {
        taskItem.remove();
    };

    btnGroup.appendChild(completeBtn);
    btnGroup.appendChild(deleteBtn);
    taskItem.appendChild(btnGroup);

    list.appendChild(taskItem);
    input.value = "";
});

input.addEventListener("input", function() {
    errorMsg.innerText = "";
});