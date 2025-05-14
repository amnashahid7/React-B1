import React from "react";
import { useTodo } from "../context/TodoContext";

const TodoItem = () => {
  const {deleteTodo,completeTodo,updateTodo}=useTodo();
  return (
    <div
      className={`todo-item ${todo.completed ? "completed-bg" : "pending-bg"}`}
    >
      <input
        type="checkbox"
        className="todo-checkbox"
        checked={todo.completed}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={`todo-text-input ${isTodoEditable ? "editable" : ""} ${
          todo.completed ? "line-through" : ""
        }`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      <button
        className="todo-action-btn"
        onClick={() => {
          if (todo.completed) return;
          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      <button className="todo-action-btn" onClick={() => deleteTodo(todo.id)}>
        ❌
      </button>
    </div>
  );
};

export default TodoItem;
