import React from 'react';
import styles from  "./style.css"
import Board from './components/board';
import Score from './components/score';
import PopInfo from './components/info';
import { useState } from 'react';

import Stopwatch from './components/stop';





function App(){
    const [game, setGame] = useState(false)
    //const check = document.getElementsByClassName('stFwDofkgRwKTCBMWRnU')
    const check = document.getElementById('stopwatch')

    if(check){
        console.log(check)
        console.log('yes')

    }
    console.log('test')
    return(
        <div className='App'>
            <Board/>
            <Stopwatch/>
        </div>
    )
}

export default App;
