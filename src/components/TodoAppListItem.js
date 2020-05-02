import React from 'react';
import {connect} from "react-redux";
import {toggleTodo} from "../redux/actions";
import "./style.css";

const TodoAppListItem = ({content, id, completed, toggleTodo}) => {
    return (
        <div> 
           <button className= "btn"  style={{
            textDecoration: completed ? "line-through" : "initial"
        }}  onClick={() => toggleTodo(id)} >
           -
           </button>
            {content}
        </div>
        
        
    );
};

const mapDispatchToProps = {
    toggleTodo: toggleTodo
}

export default connect(null, mapDispatchToProps)(TodoAppListItem);