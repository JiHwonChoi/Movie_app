import React from "react";

function Food(props){
    return (
        <div>
            <h3>I like {props.name} very much</h3>
            <h4>{props.rating}/5.0</h4>
            <img src={props.picture} width='200px' height='200px'></img>
            <div height='150px'></div>
        </div>
        
    )
}

export default Food