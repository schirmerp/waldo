import React from "react";

export default function FoundInfo(props){
    return(
        <div className={props.className}>
            <div className="fbox">{props.info}</div>
        </div>
    )
}

