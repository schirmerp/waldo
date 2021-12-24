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
    function handleClick(e){
        console.log(e.target.parentElement.parentElement)
        
    }
    
    
    
    return(
        <div className='App' onClick={handleClick}>
            <Board/>
            <Stopwatch/>
        </div>
        
    )
    
}

export default App;
