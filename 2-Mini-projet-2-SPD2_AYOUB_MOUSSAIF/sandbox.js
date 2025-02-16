document.addEventListener("DOMContentLoaded", () => {
    let list_tasks = document.getElementById("tasks");
    let add_form = document.querySelector(".add");
    let search = document.getElementById("search_place");

    search.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
        }
    });

    add_form.addEventListener("submit", (e) => {
        e.preventDefault();

        let taskInput = add_form.querySelector("input");
        let task = taskInput.value.trim();

        if (task.length) {
            let template = `
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    <span>${task}</span>
                    <i class="far fa-trash-alt delete"></i>
                </li>`;

            list_tasks.insertAdjacentHTML("beforeend", template);
            taskInput.value = "";
        }
    });

    list_tasks.addEventListener("click", (e) => {
        if (e.target.classList.contains("delete")) {
            e.target.parentElement.remove();
        }
    });

    const filterTodos = (term) => {
        const todos = Array.from(list_tasks.children);
        let matchingTodos = [];
        let nonMatchingTodos = [];

        for (let i = 0; i < todos.length; i++) {
            let text = todos[i].textContent.toLowerCase().trim();
            if (text.startsWith(term)) {
                matchingTodos.push(text);
            } else {
                nonMatchingTodos.push(text);
            }
        }

        matchingTodos.sort((a, b) => a.localeCompare(b));
        nonMatchingTodos.sort((a, b) => a.localeCompare(b));
        let newHTML = "";
        for (let i = 0; i < matchingTodos.length; i++) {
            newHTML += `
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    <span>${matchingTodos[i]}</span>
                    <i class="far fa-trash-alt delete"></i>
                </li>`;
        }
        for (let i = 0; i < nonMatchingTodos.length; i++) {
            newHTML += `
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    <span>${nonMatchingTodos[i]}</span>
                    <i class="far fa-trash-alt delete"></i>
                </li>`;
        }

        list_tasks.innerHTML = newHTML;
    };

    search.addEventListener("keyup", () => {
        const term = search.value.trim().toLowerCase();
        filterTodos(term);
    });
});
