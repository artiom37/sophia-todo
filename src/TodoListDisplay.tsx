import React, {useState } from "react";
import { Todo } from "./types/todoTypes";
import './styles.css';
import { ButtonGroup, Table } from "react-bootstrap";
import { updateTodosInLocalStorage } from "./utils/updateLocalStorage";
import TodoListItem from "./TodoListItem";

interface TodoListDisplayProps {
  todos: Todo[];
  toggleTodo: (todoId: string, completed: boolean) => void;
  onTaskUpdate: (todoId: string, newTask: string) => void;
  onRemove: (todoId: string) => void;
}

const TodoListDisplay = (props: TodoListDisplayProps) => {
  const { todos, toggleTodo, onTaskUpdate, onRemove } = props;

  return (
    <Table striped hover responsive>
      <thead className="table-header">
        <tr>
          <th> Status </th>
          <th className="table-header-task"> Task Name </th>
          <th />
        </tr>
      </thead>
      <tbody>
        {todos.map((todo: Todo) => {
          return (
            <TodoListItem 
              todo={todo} 
              toggleTodo={() => toggleTodo(todo.id, todo.completed)}
              onTaskUpdate={onTaskUpdate}
              onRemove={() => onRemove(todo.id)}
            />    
          );
        })}
      </tbody>
    </Table>
  );
};

export default TodoListDisplay;