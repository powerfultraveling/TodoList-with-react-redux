import { SET_TODOS } from "./todosActionType";

const initial = {
    todos:[]
}

function todosReducer(state=initial, action){
    switch(action.type){
        case SET_TODOS:return{
            ...state,
            todos: action.payLoad
        }
        default: return state
    }
}

export default todosReducer