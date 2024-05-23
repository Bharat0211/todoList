document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');
    const taskCount = document.getElementById('task-count');

    const updateTaskCount = () => {
        const totalTasks = todoList.getElementsByTagName('li').length;
        taskCount.textContent = `Total tasks: ${totalTasks}`;
    };

    const addTask = () => {
        const todoText = todoInput.value.trim();
        if (todoText !== '') {
            const li = document.createElement('li');

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.addEventListener('change', () => {
                li.classList.toggle('checked');
            });

            const span = document.createElement('span');
            span.textContent = todoText;

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.classList.add('delete-btn');
            deleteBtn.addEventListener('click', () => {
                todoList.removeChild(li);
                updateTaskCount();
            });

            li.appendChild(checkbox);
            li.appendChild(span);
            li.appendChild(deleteBtn);

            todoList.appendChild(li);
            todoInput.value = '';
            updateTaskCount();
        }
    };

    addBtn.addEventListener('click', addTask);

    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
