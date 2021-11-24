import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {setFilter} from "../Redux/filters/filtersAction"

export default function Filters(){
    const filter = useSelector((state)=>state.filter.filter);
    const dispatch = useDispatch();
    function filterHandler(e){
        if(e.target.id === "All"){
            dispatch(setFilter("All"))
        }else if(e.target.id === "done"){
            dispatch(setFilter("done"))
        }else if(e.target.id === "undone"){
            dispatch(setFilter("undone"))
        }
    }
    return(
        <div className="filters" onClick={(e)=>{filterHandler(e)}}>
            <button className="filter-btn" id="All">All</button>
            <button className="filter-btn" id="done">done</button>
            <button className="filter-btn" id="undone">undone</button>
        </div>
    )
}