import { createContext, useContext } from "react";

export const TodoContext= createContext(
    {
        id:1,
        todo:'todo',
        addTodo:(todo)=>{},
        updateTodo:(id,todo)=>{},
        deleteTodo:(id)=>{},
        completeTodo:(id)=>{}
    }
); 


export const useTodo=()=>{
    return useContext(TodoContext);
}

export const TodoProvider=TodoContext.Provider; 