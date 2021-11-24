import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTodos } from "../Redux/todos/todosAction";
import style from "../css/style.css";

export default function TodosCard(props){
    const {item} = props;
    const todos = useSelector((state)=>state.todos.todos);
    const dispatch = useDispatch()

    function handleComplete(){
       const newTodos = todos.map(element => {
            if(element.id === item.id){
                element.completed = !element.completed
                return element
            }
            return element
           });
        dispatch(setTodos(newTodos))
    }

    function handleDelete(){
        const newTodos = todos.filter((element)=>element.id !== item.id)
        console.log(newTodos)
        dispatch(setTodos(newTodos));
    }

    return(
        <div className="card">
            <div className="content">{item.content}</div>
            <div>
                {item.completed === false ? <button className="complete_btn" onClick={()=>{handleComplete()}}>complete</button> : <button className="complete_btn" onClick={()=>{handleComplete()}}>uncomplete</button>}
                <button className="delete_btn" onClick={()=>{handleDelete()}}>delete</button>
            </div>
        </div>
    )
}