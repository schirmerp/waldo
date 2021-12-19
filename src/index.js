import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import styles from  "./style.css"

const check = document.getElementById('stopwatch')
if(check){
  console.log(check)
  console.log('yes-app')
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

module.hot.accept();
