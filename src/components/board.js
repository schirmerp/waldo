import React, { useEffect, useState } from "react";
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
import Expire from "./expire";
import FoundInfo from "./found";


export default function Board(){
    const [key, setKey] = useState(0)
    const [found, setFound] = useState(0)
    const check = document.getElementById('stopwatch')
    

    function handleClick(e){
        
        if(e.target.offsetParent.id === 'notFound'){
            console.log('it equals not found')
            setFound(found => found + 1)
        }if(found === 9){
            console.log('STOP THE GAME STOPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP')
        }
        if(e.target.offsetParent.id === 'yesFound'){
            console.log(e.target.offsetParent)
            setKey(key => key + 1)
        }
        console.log(found)
        
    }
    
    
    return(
        <div className="board-div">
            <Item className={style.board} src={group}/>
            <Item className={styles.rick} src={rick} onClick={handleClick} alt={"Rick"}/>
            <Item className={styles.ballon} src={ballon} onClick={handleClick} alt={"Ballon"}/>
            <Item className={styles.seeks} src={seeks} onClick={handleClick} alt={"Mr. Meseeks"}/>
            <Item className={styles.duck} src={duck} onClick={handleClick} alt={"Duck"}/>
            <Item className={styles.flamingo} src={flamingo} onClick={handleClick} alt={"Flamingo"}/>
            <Item className={styles.morty} src={morty} onClick={handleClick} alt={"Morty"}/>
            <Item className={styles.pencil} src={pencil} onClick={handleClick} alt={"Pencil"}/>
            <Item className={styles.summer} src={summer} onClick={handleClick} alt={"Summer"}/>
            <Item className={styles.tinycowboy} src={tinycowboy} onClick={handleClick} alt={"Tinycowboy"}/>
            <Expire delay="500000" key={key}>
                <FoundInfo className={(key === 0) ? styles.none : styles.beenFound} info="You already found this shit!!!!" size="col-md-10" />
            </Expire>
        </div>
    )
}