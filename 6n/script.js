const addBtn = document.querySelector('.add')
const deleteAll = document.querySelector('.delete-all')
const deleteNot = document.getElementsByClassName('delete-note')
const save = document.querySelector('.save')
const cancel = document.querySelector('.cancel')

const noteArea = document.querySelector('.note-area')
const notePanel = document.querySelector('.note-panel')
const category = document.querySelector('#category')
const textarea = document.querySelector('#text')
const error = document.querySelector('.error')

let selectedValue;
let cardId = 0;

const openPanel = () => {
    notePanel.style.display = 'flex'
}

const closePopup = () => {
    notePanel.style.display = 'none'
    error.style.visibility = 'hidden'
    category.selectedIndex = 0
    textarea.value = ''

}

const createNote = () => {
    const newNote = document.createElement('div')
    newNote.classList.add('note')
    newNote.setAttribute('id', cardId)
    newNote.innerHTML = `
                <div class="note-header">
                <h3 class="note-title">${selectedValue}</h3>
                <button class="delete-note" onclick="deleteNote(${cardId})">
                    <i class="fas fa-times icon">x</i>
                </button>
            </div>
            <div class="note-body">
                ${textarea.value}
            </div>
    `
    noteArea.appendChild(newNote)
    cardId++;
    category.selectedIndex = 0
}

const addNote = () => {
    if (textarea.value !== '' && category.options[category.selectedIndex].value !== '0') {
        createNote()
        error.style.visibility = 'hidden'
    } else {
        error.style.visibility = 'visible'
    }
}
const selectValue = () => {
    selectedValue = category.options[category.selectedIndex].text
    console.log(selectedValue)
}

const deleteNote = id => {
    const noteToDelete = document.getElementById(id)
    noteArea.removeChild(noteToDelete)

}

save.addEventListener('click', addNote)
cancel.addEventListener('click', closePopup)
addBtn.addEventListener('click', openPanel)