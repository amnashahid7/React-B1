import { TodoProvider, useTodo } from "./context/TodoContext";


function App() {
 const addTodo=()=>{}
 const updateTodo=()=>{}
 const deleteTodo=()=>{}
 const completeTodo=()=>{}
 const {todo}= useTodo();
  return <>
  <TodoProvider value={{addTodo,updateTodo,deleteTodo,completeTodo}}>
app
  </TodoProvider>
  </>;
}

export default App;
