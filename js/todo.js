const btnAdd = document.getElementById('btn-add');
btnAdd.onclick = function () {
    const input = document.getElementById('add-task');
    const todo = input.value;
    if (todo) {
        const ul = document.getElementById('task-list');
        const li = document.createElement('li');
        const removeBtn = document.createElement('button');
        const span = document.createElement('span');
        span.textContent = todo;
        removeBtn.textContent = 'Delete';
        removeBtn.classList.add('btn');
        removeBtn.classList.add('btn-danger');
        removeBtn.classList.add('btn-sm');

        removeBtn.onclick = removeTask;
        span.onclick = markAsDone;
        li.appendChild(span);
        li.appendChild(removeBtn);

        li.classList.add('list-group-item');
        li.classList.add('d-flex');
        li.classList.add('justify-content-between');
        li.classList.add('align-items-center');
        ul.appendChild(li);
        input.value = '';
    }
}

function markAsDone() {
    console.log('markAsDone');
    const span = this;
    if (span.style.textDecoration === 'line-through') {
        span.style.textDecoration = 'none';
        removeFromDoneList(span.textContent);
    } else {
        span.style.textDecoration = 'line-through';
        addToDoneList(span.textContent);
    }
}

function removeTask() {
    const li = this.parentElement;
    li.remove();
    const task = li.querySelector('span').textContent;
    removeFromDoneList(task);
}

function addToDoneList(taskDone) {
    const ul = document.getElementById('task-done');
    const li = document.createElement('li');
    li.setAttribute('data-task', taskDone);
    li.classList.add('list-group-item');
    li.classList.add('d-flex');
    li.classList.add('justify-content-between');
    li.classList.add('align-items-center');
    li.textContent = taskDone;
    ul.appendChild(li);
}

function removeFromDoneList(taskDone) {
    const ul = document.getElementById('task-done');
    const li = ul.querySelector(`[data-task="${taskDone}"]`);
    li.remove();
}