import {SET_FILTER} from "./filtersActionType";

export function setFilter(state){
    return{
        type: SET_FILTER,
        payLoad: state
    }
}