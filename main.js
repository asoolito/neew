    // const todoForm = document.querySelector("form");
    // const todoInput = document.querySelector(".input");
    // const todoList = document.querySelector(".list");   

    // todoForm.addEventListener("submit", (event) => {
    //     event.preventDefault();
    //     const inputValue = todoInput.value;
    //     const newItem = document.createElement("li");
    //     const todoCheckbox = document.createElement("input");
    //     const todoEdit = document.createElement("button");
    //     const todoDelete = document.createElement("button");})



    const todoForm = document.querySelector(".form")
const todoInput = document.querySelector(".input")
const todoList = document.querySelector(".list")
todoForm.addEventListener("submit", (said)=>{
    said.preventDefault()
    const inputValue = todoInput.value
    const newItem = document.createElement("li")
    const UserName = document.createElement("h2")
    const todoCheckbox = document.createElement("input")
    const todoEdit = document.createElement("button")
    todoEdit.classList.add("Edit")
    const todoDelete = document.createElement("button")
    todoDelete.className = "Delete"
    const wrapper  = document.createElement("div")

    wrapper.append(todoDelete,todoEdit)
    todoEdit.textContent = "edit"
    todoDelete.textContent = "delete"
    todoCheckbox.type = "checkbox"
    todoCheckbox.className = "checkbox"
    UserName.textContent = inputValue

    newItem.className = "item"
    document.body.appendChild(todoList)
    const Username = document.createElement("h2")
    Username.textContent = inputValue
    newItem.append(todoCheckbox,todoDelete,todoEdit,Username)
    todoList.appendChild(newItem)

    todoDelete.addEventListener("click", (evt)=>{
        todoList.removeChild(newItem)
    })

    todoInput.value = "";




}) 