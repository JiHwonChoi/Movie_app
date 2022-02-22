import React from "react";

function Food(props){
    return (
        <div>
            <h3>I like {props.name} very much</h3>
            <img src={props.picture} width='200px' height='200px'></img>
            <div height='150px'> </div>
        </div>
        
    )
}

export default Food