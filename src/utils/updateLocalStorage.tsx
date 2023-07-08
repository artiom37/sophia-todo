import type { Todo } from "../types/todoTypes";

const LOCAL_STORAGE_KEY = "TASKS";

export function getTodosFromLocalStorage(): Todo[] {
  try {
    const savedTodos = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedTodos) {
      return JSON.parse(savedTodos);
    }
    return [];
  } catch (err) {
    return [];
  }
}

export function addTodoToLocalStorage(todo: Todo) {
  const todos: Todo[] = getTodosFromLocalStorage();
  todos.push(todo);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
}

export function removeTodoFromLocalStorage(todoId: string) {
  const todos: Todo[] = getTodosFromLocalStorage();
  const updatedListOfTodos = todos.filter((todo) => todo.id !== todoId);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedListOfTodos));

  return updatedListOfTodos;
}

export function updateTodosInLocalStorage(todos: Todo[]){
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
}