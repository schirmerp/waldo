import React from "react";

export default function PopInfo(props){
    return(
        <div className={props.className}>
            <div>{props.info}</div>
        </div>
    )
}

/* write pop cards for each item. include them in a item build   */