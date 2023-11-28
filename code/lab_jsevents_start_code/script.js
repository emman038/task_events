const enterButton = document.querySelector("#todo-form");
const list = document.querySelector("#list");
const currentDataButton = document.querySelector("#current-date");
const body = document.querySelector("body");
let count =0;

enterButton.addEventListener("submit", (event) => {
    const newToDo = document.querySelector("#new-todo");

    event.preventDefault();
    const newItem = document.createElement("li");

    const deleteItemButton = document.createElement("button");
    deleteItemButton.innerText = "Delete";

    newItem.innerText = newToDo.value;

    newItem.appendChild(deleteItemButton);
    list.appendChild(newItem);

    deleteItemButton.addEventListener("click", ()=>{
        list.removeChild(newItem);
    });

});

currentDataButton.addEventListener("click", ()=>{
    count ++;
    if(count==1){
        const currentTime = document.createElement("h1");
        currentTime.setAttribute("id", "display-date")
        currentTime.innerText = Date();
        document.body.appendChild(currentTime);
    } 
    if(count>1){
        const currentTime = document.querySelector("#display-date");
        currentTime.innerText = Date();
    }
});