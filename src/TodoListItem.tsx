import React, {useState } from "react";
import type { Todo }  from "./types/todoTypes";
import './styles.css';
import {ButtonGroup} from "react-bootstrap";

interface TodoListItemProp {
  todo: Todo;
  toggleTodo: (todoId: string, completed: boolean) => void;   
  onTaskUpdate: (todoId: string, newTask: string) => void;
  onRemove: (todoId: string) => void;
}

const TodoListItem = (props: TodoListItemProp) => {
  const { todo, toggleTodo, onTaskUpdate, onRemove } = props;
  const [isEditable, setIsEditable] = useState<boolean>(false); 
  const [updateTask, setUpdateTask] = useState<string>(todo.task);

  const handleTaskUpdateDone = (e: any) => {
    if(e.key === 'Enter'){
      onTaskUpdate(todo.id, updateTask);
      setIsEditable(false);
    }
  }

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
        {isEditable === true ? 
          <div className="input-edit" >
            <input             
              type="text"
              autoFocus
              value={updateTask}
              onChange={(e) => setUpdateTask(e.target.value)}
              onKeyDown={handleTaskUpdateDone}              
            /> 
          </div>
        : updateTask}
      </td>
      <td className="table-row-buttons">
        <ButtonGroup>
          <button 
            className="btn btn-secondary btn-sm"
            onClick={() => setIsEditable(true)}>
              Edit 
          </button>
          <button 
            className="btn btn-danger btn-sm" 
            onClick={() => onRemove(todo.id)}>
              Remove
          </button>
        </ButtonGroup>
      </td>
    </tr>
  );
}

export default TodoListItem;