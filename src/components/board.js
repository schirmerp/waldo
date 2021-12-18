import React from "react";
import group from "/src/images/waldo_img/wheres_rick.png"
import Item from "./item";
import rick from "/src/images/waldo_img/rick.png"
import styles from "/src/style.css"
import ballon from "/src/images/waldo_img/ballon.png"
import seeks from "/src/images/waldo_img/mseeks.png"
import duck from "/src/images/waldo_img/duck.png"
import flamingo from "/src/images/waldo_img/flamingo.png"
import morty from "/src/images/waldo_img/morty.png"
import pencil from "/src/images/waldo_img/pencil.png"
import summer from "/src/images/waldo_img/summer.png"
import tinycowboy from "/src/images/waldo_img/tinycowboy.png"
import style from "/src//components/item.css"

export default function Board(){
    return(
        <div className="board-div">
            <Item className={style.board} src={group}/>
            <Item className={styles.rick} src={rick} onClick={()=>console.log("got rick")} alt={"Rick"}/>
            <Item className={styles.ballon} src={ballon} onClick={()=>console.log("got Ballon")} alt={"Ballon"}/>
            <Item className={styles.seeks} src={seeks} onClick={()=>console.log("got messeks")} alt={"Mr. Meseeks"}/>
            <Item className={styles.duck} src={duck} onClick={()=>console.log("got duck")} alt={"Duck"}/>
            <Item className={styles.flamingo} src={flamingo} onClick={()=>console.log("got flamingo")} alt={"Flamingo"}/>
            <Item className={styles.morty} src={morty} onClick={()=>console.log("got morty")} alt={"Morty"}/>
            <Item className={styles.pencil} src={pencil} onClick={()=>console.log("got pencil")} alt={"Pencil"}/>
            <Item className={styles.summer} src={summer} onClick={()=>console.log("got summer")} alt={"Summer"}/>
            <Item className={styles.tinycowboy} src={tinycowboy} onClick={()=>console.log("got tinycowboy")} alt={"Tinycowboy"}/>
        </div>
    )
}