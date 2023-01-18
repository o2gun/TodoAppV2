const myBody = document.querySelector("body")

const formElements = `
    <form>
        <div>
            <input class="todoInput" type="text" maxlength="157">
            <input type="submit" class="add" placeholder="lorem" ></input>
        </div>
    </form>  

`
const container = `
<div class= "container"></div>`

myBody.innerHTML = formElements + container

const inputDOM = document.querySelector(".todoInput")
const addButtonDOM = document.querySelector(".add")
const containerDOM = document.querySelector(".container")

let todos = JSON.parse(localStorage.getItem("todoCard")) || [];

const addTodo = (todoArray) => {
    try {
        let mapTodos = todoArray.map(item => `<div class="todoContainer">
    <div class="todoCard">${item}</div>
    <button class="delete">x</button>
    </div>`)
        mapTodos = mapTodos.join("");
        containerDOM.innerHTML = mapTodos

        const deleteDOM = document.querySelectorAll(".delete")

        deleteDOM.forEach(i => {
            i.addEventListener("click", () => {
                todos = todoArray.filter(item => item !== (i.previousElementSibling.textContent.trim()))
                addTodo(todos)

                local.setItem("todoCard", JSON.stringify(todos))

            })

        })
    } catch (error) {
        console.log("mmmmsıçtın...")

    }
}

addTodo(todos)
// console.log(todos)
let local = localStorage;
addButtonDOM.addEventListener("click", (e) => {
    e.preventDefault();
    if (!inputDOM.value) return
    todos.push(inputDOM.value)
    local.setItem("todoCard", JSON.stringify(todos))
    inputDOM.value = ""
    addTodo(todos)

})

// fetch("https://jsonplaceholder.typicode.com/posts").then(
//     response => response.JSON()
// ).then(responseJson => {
//     response.JSON.forEach(item => {
//         liDOM.innerHTML.
//     })
// })


// // json object
// const jsonData1 = '{ "name": "John", "age": 22 }';

// // converting to JavaScript object
// const obj1 = JSON.parse(jsonData1);

// // accessing the data
// console.log(obj1); // John
// ---
// // JavaScript object
// const jsonData = { "name": "Tomy", "age": 22 };

// // converting to JSON
// const obj = JSON.stringify(jsonData);

// // accessing the data
// console.log(obj); // "{"name":"John","age":22}"
