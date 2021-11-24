import { SET_TODOS } from "./todosActionType";

export function setTodos(todos){
    return{
        type: SET_TODOS,
        payLoad: todos
    }
}