const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragStart)
item.addEventListener('dragend', dragEnd)

for (let item of placeholders) {
    item.addEventListener('dragover', dragOver)
    item.addEventListener('dragenter', dragEnter)
    item.addEventListener('dragleave', dragLeave)
    item.addEventListener('drop', dragDrop)
}

function dragStart(event) {
    event.target.classList.add('hold')
    setTimeout(() => event.target.classList.add('hide'), 0)
}

function dragEnd(event) {
    event.target.classList.remove('hold')
    event.target.classList.remove('hide')
}

function dragOver(event) {
    event.preventDefault()
}

function dragEnter(event) {
    event.target.classList.add('hovered')

}

function dragLeave(event) {
    event.target.classList.remove('hovered')
}

function dragDrop(event) {
    event.target.classList.remove('hovered')
    event.target.append(item)
}