import React from "react";
import {useSelector, useDispatch} from "react-redux";
import TodosCard from "./TodosCard";

export default function TodosSec(){
    const todos = useSelector((state)=>{return state.todos.todos})
    const filter = useSelector((state)=>state.filter.filter);
    console.log(todos)
    return(
        <section style={{marginTop: "10px"}}>
            {filter === "All" && todos.map((item)=>{
                return <TodosCard item={item}></TodosCard>
            })}
            {filter === "done" && todos.map((item)=>{
                if(item.completed === true){
                    return <TodosCard item={item}></TodosCard>
                }
            })}
            {filter === "undone" && todos.map((item)=>{
                if(item.completed === false){
                    return <TodosCard item={item}></TodosCard>
                }
            })}
        </section>
    )
}