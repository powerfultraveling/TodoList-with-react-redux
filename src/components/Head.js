import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setTodos} from "../Redux/todos/todosAction";
import style from "../css/style.css"

function Head(){
    const [Input, setInput] = useState("");
    const todos = useSelector((state)=>{return state.todos.todos});
    const dispatch = useDispatch();

    function submitHandler(e){
        e.preventDefault();
        const newTodos = [...todos,{
            id: todos.length-1,
            content: Input,
            completed: false
        }]
        dispatch(setTodos(newTodos))
        setInput("");
    }

    return(
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <div className="title">Todo List</div>
            <div>
                <form onSubmit={(e)=>{submitHandler(e)}}>
                    <input type="text" className="text_input"value={Input} onChange={(e)=>{setInput(e.target.value)}}></input>
                    <input type="submit" className="submit"></input>
                </form>
            </div>
        </div>
    )
}

export default Head