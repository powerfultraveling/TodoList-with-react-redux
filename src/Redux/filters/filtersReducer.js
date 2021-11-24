import {SET_FILTER} from "./filtersActionType";


const initial = {
    filter: "All"
}

export default function filtersReducer(state=initial, action){
    switch(action.type){
        case SET_FILTER: return{
            ...state,
            filter: action.payLoad
        }
        default: return state
    }
}