import {createSlice,nanoid} from "@reduxjs/toolkit"

const savedTodos = localStorage.getItem("todos");

const initialState = {
    todos: savedTodos ? JSON.parse(savedTodos) : []
};

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo: (state,action) => {
            const { text, date } = action.payload
            const todo = {
                id:nanoid(),
                text:text,
                completed: false,
                date:date,
            }
            state.todos.push(todo)
            localStorage.setItem("todos", JSON.stringify(state.todos))
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload
            const todo = state.todos.find((t) => t.id === id)
            if (todo) {
                todo.text = text
            }
            localStorage.setItem("todos", JSON.stringify(state.todos))
        },
        deleteTodo: (state,action) => {
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
            localStorage.setItem("todos", JSON.stringify(state.todos))
        },
        toggleComplete: (state,action) => {
            const{id,text} = action.payload
            const todo = state.todos.find((t)=>t.id === action.payload)
            if(todo)
            {
                todo.completed = !todo.completed
            }
            localStorage.setItem("todos", JSON.stringify(state.todos))
        }
        
    }

})

export const {addTodo,deleteTodo,toggleComplete,updateTodo} = todoSlice.actions
export default todoSlice.reducer