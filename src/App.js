import React from 'react';
import styles from  "./style.css"
import Board from './components/board';
import Score from './components/score';
import PopInfo from './components/info';
import { useState } from 'react';

import Stopwatch from './components/stop';





function App(){
    
    const check = document.getElementsByClassName('stFwDofkgRwKTCBMWRnU')
    //const check = document.getElementById('stopwatch')
    //const e = (i)=> {return document.evaluate(i, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;}
    
    const boff = document.getElementsByClassName('buttonsOff')
    const bon = document.getElementsByClassName('buttonsOn')
    if(boff){
        console.log('boff')
    }
    if(bon){
        console.log(bon)
    }
    if(check){
        console.log(check)
        console.log('yes-app')
        
    }
    
    
    console.log(document.getElementsByClassName('deck').parentElement)
    return(
        <div className='App'>
            <Board/>
            <Stopwatch/>
        </div>
    )
}

export default App;
