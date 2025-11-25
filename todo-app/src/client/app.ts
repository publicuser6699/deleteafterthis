// This file is the main TypeScript file for the client-side application.
// It handles the interaction with the DOM, fetching to-do items from the server, and updating the UI.

class TodoApp {
    private todos: Array<{ id: number; title: string; completed: boolean }> = [];
    private todoListElement: HTMLElement;

    constructor() {
        this.todoListElement = document.getElementById('todo-list')!;
        this.fetchTodos();
    }

    private async fetchTodos() {
        try {
            const response = await fetch('/api/todos');
            this.todos = await response.json();
            this.renderTodos();
        } catch (error) {
            console.error('Error fetching todos:', error);
        }
    }

    private renderTodos() {
        this.todoListElement.innerHTML = '';
        this.todos.forEach(todo => {
            const todoItem = document.createElement('li');
            todoItem.textContent = todo.title;
            todoItem.className = todo.completed ? 'completed' : '';
            this.todoListElement.appendChild(todoItem);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new TodoApp();
});