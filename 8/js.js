let todoInput
let errorInfo
let addBtn
let ulList
let newTodo

const main = () => {
    prepareDOMElements()
    prepareDOMEvents()

}

const prepareDOMElements = () => {
    todoInput = document.querySelector('.todo-input')
    errorInfo = document.querySelector('.error-info')
    addBtn = document.querySelector('.btn-add')
    ulList = document.querySelector('.todolist ul')
}

const prepareDOMEvents = () => {
    addBtn.addEventListener('click', addNewTask)
}

const addNewTask = () => {
    if (todoInput.value !== '') {
        newTodo = document.createElement('li')
        newTodo.textContent = todoInput.value
        ulList.append(newTodo)


    } else {
        errorInfo.textContent = 'Nie może być pusty'
    }
}




document.addEventListener('DOMContentLoaded', main)