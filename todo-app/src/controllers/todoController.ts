class TodoController {
    private todos: { id: number; title: string; completed: boolean }[] = [];
    private nextId: number = 1;

    createTodo(title: string) {
        const newTodo = { id: this.nextId++, title, completed: false };
        this.todos.push(newTodo);
        return newTodo;
    }

    getTodos() {
        return this.todos;
    }

    updateTodo(id: number, title?: string, completed?: boolean) {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            if (title !== undefined) {
                todo.title = title;
            }
            if (completed !== undefined) {
                todo.completed = completed;
            }
            return todo;
        }
        return null;
    }

    deleteTodo(id: number) {
        const index = this.todos.findIndex(todo => todo.id === id);
        if (index !== -1) {
            return this.todos.splice(index, 1)[0];
        }
        return null;
    }
}

export default TodoController;