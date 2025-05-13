import { useState } from "react";
import { TodoProvider, useTodo } from "./context/TodoContext";


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
  return <>
  <TodoProvider value={{addTodo,updateTodo,deleteTodo,completeTodo}}>
app
  </TodoProvider>
  </>;
}

export default App;



