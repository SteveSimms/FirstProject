const log = console.log

let count = 0

const addTask = () => {
    count++
    let TaskTemplate = `<li class="item list-group-item">Task ${count}</li>`
    let element = document.getElementById('list')
    element.innerHTML += TaskTemplate

}

log('ello gobna')