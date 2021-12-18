import React from 'react';
import styles from  "./style.css"
import Board from './components/board';
import Score from './components/score';
import PopInfo from './components/info';
import { useState } from 'react';

import Stopwatch from './components/stop';



function App(){
//const [CN, setCN] = useState("styles.info")
/*
const checkinfo = ()=>{
    //nneed to write something to test state here
}
if(checkinfo === true){
    setCN("styles.infoactive")
}else{
    setCN("styles.info")
}
*/
    return(
        <div className='App'>
            <Score/>
            <Board/>
            <Stopwatch className={styles.stopwatch}/>
        </div>
    )
}

export default App;
