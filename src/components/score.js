import React from "react";


export default function Score(props){
    return(
        <div className="scoreboard">
            <div>{props.score}</div>
        </div>
    )
}