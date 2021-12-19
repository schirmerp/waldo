import React from "react";

export default function PopInfo(props){
    return(
        <div className={props.className}>
            <div className="mbox">{props.info}</div>
        </div>
    )
}

