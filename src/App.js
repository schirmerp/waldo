import React from 'react';
import styles from  "./style.css"
import Board from './components/board';
import Score from './components/score';
import PopInfo from './components/info';
import { useState } from 'react';

import Stopwatch from './components/stop';





function App(){
    
    const check = document.getElementsByClassName('stFwDofkgRwKTCBMWRnU')
    //console.log(Board().props)
    console.log(check)
    
    
    
    
    return(
        <div className='App'>
            <Board/>
            <Stopwatch/>
        </div>
        
    )
    
}

export default App;
