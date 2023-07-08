import React from "react";
import { Todo } from "./types/todoTypes";
import './styles.css';
import { Table } from "react-bootstrap";

interface TodoListDisplayProps {
  todos: Todo[];
  toggleTodo: (todoId: string, completed: boolean) => void;
  onRemove: (todoId: string) => void;
}

const TodoListDisplay = (props: TodoListDisplayProps) => {
  const { todos, toggleTodo, onRemove } = props;

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
            <tr key={todo.id} >              
              <td className="table-row-checkbox">                
                  <input                               
                    type="checkbox"
                    checked={todo.completed}
                    onChange={(e) => toggleTodo(todo.id, e.target.checked )}
                    className={todo.completed ? "checked" : ""}
                  />
              </td>
              <td className="table-row-task">
                 {todo.task}
              </td>
              <td>
                <button 
                  className="btn btn-danger btn-sm" 
                  onClick={() => onRemove(todo.id)}
                >Remove
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default TodoListDisplay;