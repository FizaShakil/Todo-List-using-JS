const todoList = document.querySelector(".todoList"); //todo list class
const inputBox = document.querySelector("#inputBox");  // Task section where we write task
const addBtn = document.querySelector("#btnAdd"); // Add button adds list items
let array = [];

function addTasksList(){
    const task = inputBox.value;
    if(task==" "){
        alert("Kindly Enter a task");
        return;
    }
    let li = document.createElement("li");
    li.innerHTML = `<label><input type="checkbox"> <span class="taskSpan"> ${task} </span></label>
    <span class="btnDiv"><button class="delBtn liBtn"> Delete </button><button class="editBtn liBtn"> Edit </button></span>`;
    todoList.appendChild(li);
    inputBox.value = " ";

const checkBox = li.querySelector("input");
const taskSpan = li.querySelector(".taskSpan");
const deleteBtn = li.querySelector(".delBtn");
const editBtn = li.querySelector(".editBtn");

checkBox.addEventListener("click", ()=>{
    if(checkBox.checked){
    taskSpan.classList.add("completed"); 
}
else{
    taskSpan.classList.remove("completed");
}
});

deleteBtn.addEventListener("click",()=>{
    if(confirm("Are you sure want to delete ?")){
        li.remove();
}
});

editBtn.addEventListener("click",()=>{
      let update = prompt("Edit your task");
      taskSpan.textContent = update;
      alert("Updated Sucessfully !!");
});

}
// adds task when pressing Enter key
inputBox.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      addTasksList(); 
    }
  });
addBtn.addEventListener("click", addTasksList);
