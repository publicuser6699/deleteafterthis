import { Router } from 'express';
import TodoController from '../controllers/todoController';

const router = Router();
const todoController = new TodoController();

export function setRoutes(app) {
    router.post('/todos', todoController.createTodo.bind(todoController));
    router.get('/todos', todoController.getTodos.bind(todoController));
    router.put('/todos/:id', todoController.updateTodo.bind(todoController));
    router.delete('/todos/:id', todoController.deleteTodo.bind(todoController));

    app.use('/api', router);
}