import { useState } from "react";
import { TodoProvider, useTodo } from "./context/TodoContext";
import { useEffect } from "react";
import TodoForm from "./components/TodoForm";


function App() {
  const [todos, setTodos] = useState([]);
 const addTodo=(todo)=>{
  setTodos((prev)=>[{id:Date.now(),todo},...prev]
  )
 }
 const updateTodo=(id,todo)=>{
  setTodos((prev)=>prev.map((prevTodo)=>{prevTodo.id===id? todo:prevTodo}))
 }
 const deleteTodo=(id)=>{
  setTodos((prev)=>prev.filter((prevTodo)=>prevTodo.id!==id))
 }
 const completeTodo=(id)=>{
  
 setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id?
 {...prevTodo,completeTodo:!prevTodo.completeTodo}:
 prevTodo))}

useEffect(() => {
if(todos && todos.length){
  let todos= JSON.parse(localStorage.getItem("todos"));
} return;
}, []);


useEffect(() => {
localStorage.setItem("todos",JSON.stringify(todos))
}, [])




 
  return <>
  <TodoProvider value={{addTodo,updateTodo,deleteTodo,completeTodo}}>
  <div className="app-container">
  <div className="todo-box">
    <h1 className="todo-heading">Manage Your Todos</h1>
    <div className="todo-form-wrapper">
   <TodoForm/>
    </div>
    <div className="todo-list">
      {/* Loop and Add TodoItem here */}
      {/* {todos.map((todo) => (
        <div key={todo.id} className="todo-item-wrapper">
          <TodoItem todo={todo} />
        </div>
      ))} */}
    </div>
  </div>
</div>
  </TodoProvider>
  </>;
}

export default App;



