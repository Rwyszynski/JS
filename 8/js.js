let todoInput
let errorInfo
let addBtn
let ulList
let newTodo

const main = () => {
    prepareElements()
    prepareEvents()
}

const prepareElements = () => {
    todoInput = document.querySelector('.todo-input')
    errorInfo = document.querySelector('.error-info')
    addBtn = document.querySelector('.btn-add')
    ulList = document.querySelector('.todolist ul') // brak
}

const prepareEvents = () => {
    addBtn.addEventListener('click', addTask)
    ulList.addEventListener('click', checkClick)
}

const addTask = () => {
    if (todoInput.value !== '') {
        newTodo = document.createElement('li')

        newTodo.textContent = todoInput.value
        createToolsArea()
        ulList.append(newTodo)


        todoInput.value = ''
    } else {
        errorInfo.textContent = 'Nic nie podałeś'
    }
}

const createToolsArea = () => {

    const toolPanel = document.createElement('div')
    toolPanel.classList.add('tools')
    newTodo.append(toolPanel)

    const okBtn = document.createElement('button')
    okBtn.classList.add('complete')
    okBtn.innerHTML = '<i class="fas fa-check"></i>'

    const editBtn = document.createElement('button')
    editBtn.classList.add('edit')
    editBtn.textContent = 'EDIT'

    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete')
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>'

    toolPanel.append(okBtn, editBtn, deleteBtn)
}



const checkClick = e => {
    console.log(e.target)
}






document.addEventListener('DOMContentLoaded', main)