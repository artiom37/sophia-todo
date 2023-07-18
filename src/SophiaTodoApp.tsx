import React, { useEffect, useState } from "react";
import "./styles.css";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./types/todoTypes";
import TodoListDisplay from "./TodoListDisplay";
import {
  addTodoToLocalStorage,
  getTodosFromLocalStorage,
  updateTodosInLocalStorage,
} from "./utils/updateLocalStorage";
import Button  from "react-bootstrap/Button";
import SplitButton  from "react-bootstrap/SplitButton";


const SophiaTodoApp: React.FC = () => {
  const [todos, setTodos] = useState(getTodosFromLocalStorage());
  const [newTodo, setNewTodo] = useState<string>("");

  // useEffect(() => {
  //   localStorage.setItem("TASKS", JSON.stringify(todos));
  // }, [todos]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };
  const handleOnSubmit = () => {
    // e.preventDefault();
    if (newTodo.trim().length === 0) {
      alert("Please enter the value");
      return;
    }

    const todo: Todo = {
      id: uuidv4(),
      task: newTodo,
      completed: false,
      isEditable: false,
    };
    addTodoToLocalStorage(todo);
    // setTodos([todo, ...todos]);
    setTodos(getTodosFromLocalStorage());
    setNewTodo("");
  };

  const handleSelectAll = () => {
    setTodos(todos.map(todo => ({...todo, completed: true})));
  }
  const handleUnselectAll = () => {
    setTodos(todos.map(todo => ({...todo, completed: false})));
  }

  const handleToggleTodo = (todoId: string, completed: boolean) => {
    setTodos(currentTodos => {
      const updatedTodos = currentTodos.map((todo) => {
        if(todo.id === todoId) {
          return {...todo, completed: !completed};
        }
        return todo;
      });
      updateTodosInLocalStorage(updatedTodos);
      return updatedTodos;
    });
  };

  const handleTaskUpdate = (todoId: string, newText: string) => {
    setTodos(currentTodos => {
      const updatedTodos = currentTodos.map(todo => {
        if(todo.id === todoId){
          todo.task = newText;
        }
        return todo;
      });
      updateTodosInLocalStorage(updatedTodos);
      return updatedTodos;
    })
  }

  const handleOnRemove = (todoId: string) => {
    setTodos(currentTodos => {
      const updatedTodos =  currentTodos.filter(todo => todo.id !== todoId);
      updateTodosInLocalStorage(updatedTodos);
      return updatedTodos;
    })
  };

  return (
    <>
      <form className="SophiaTodoForm">
        <header>
          <h1>Morning To Do List</h1>
          <input
            type="text"
            value={newTodo}
            onChange={handleInput}
            placeholder="Add To Do"
          />         
        </header>      
        <Button             
            className="btn-add-todo"
            type="submit"
            variant="secondary"
            onClick={handleOnSubmit}
        > Add
        </Button>
      </form>    
      <hr />
      <Button
          className="btn-selectAll"
          variant="secondary"
          size="sm"
          type="button"
          onClick={handleSelectAll}
      > Select All
      </Button>
      <Button             
          className="btn-unselectAll"
          variant="secondary"
          size='sm'
          type="reset"
          onClick={handleUnselectAll}
      >Unselect All
      </Button>      
      <TodoListDisplay
        todos={todos}
        toggleTodo={handleToggleTodo}
        onTaskUpdate={handleTaskUpdate}
        onRemove={handleOnRemove}
      />
    </>
  );
};

export default SophiaTodoApp;
