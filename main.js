let form = document.querySelector('form')
let input = document.querySelector('input')
let ul = document.querySelector('ul')

const addTodo = (e) => {
    e.preventDefault()
    let li = document.createElement("li")
    li.innerText = input.value
    li.className = "flex items-center justify-between border border-gray-300 p-4 rounded-md shadow-xl flex items-center my-2"
    let delBtn = document.createElement("button")
    delBtn.innerText = "Delete"
    delBtn.className = "delete bg-red-500 hover:bg-red-600 cursor-pointer text-white font-bold rounded-md text-sm p-1"
    li.appendChild(delBtn)
    ul.appendChild(li)
    form.reset()
}


form.addEventListener("submit", addTodo)

const removeTodo = (e) => {
    if (e.target.className.includes("delete")) {
        ul.removeChild(e.target.parentElement)
    }
}

ul.addEventListener("click", removeTodo)