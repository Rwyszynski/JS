let $todoInput; // miejsce, gdzie użytkownik wpisuje treść
let $alertInfo; // info o braku zadań / konieczności dodania tekstu
let $addBtn; // przycisk ADD - dodaje nowe elementy do listy
let $ulList; // nasza lista zadań, tagi <ul></ul>
let $newTask; // nowo dodany LI, nowe zadanie
let $allTasks; // lista wszystkich dodanych LI
let $idNumber = 0; // ID dodawane do każdego nowego zadania
let $popup; //pobrany popup
let $popupInfo; // alert w popupie, jak się doda pusty tekst
let $editedTodo; // edytowany Todo
let $popupInput; //tekst wpisywany w inputa w popup'ie
let $addPopupBtn; // przycisk "zatwierdź" w popup'ie
let $closeTodoBtn //przycisk od zamykania popup'a

const main = () => {
    prepareDOMElements()
    prepareDOMEvents()
}


const prepareDOMElements = () => {
    $todoInput = document.querySelector('.todo-input')
    $alertInfo = document.querySelector('.error-info')
    $addBtn = document.querySelector('.add-btn')
    $ulList = document.querySelector('.todo-list ul')
}

const prepareDOMEvents = () => {
    $addBtn.addEventListener('click', addNewTask)
}

const addNewTask = () => {
    if ($todoInput.value !== '') {
        newTask = document.createElement('li')
        newTask.textContent = $todoInput.value
        $ulList.append(newTask)
        $todoInput.value = ''

    } else {
        $alertInfo.textContent = 'Podaj wartość'
        console.log('nie OK')
    }
}


document.addEventListener('DOMContentLoaded', main)