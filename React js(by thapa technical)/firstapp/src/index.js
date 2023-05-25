import React from 'react';
import ReactDOM  from 'react-dom';
import './index.css';

let  curDate = new Date();
// let  curDate = new Date(2022,5,2,15);
let greeting = '';

const cssStyle= {};

curDate = curDate.getHours();
// curTime = curTime.getTime();

if(curDate >= 1 && curDate < 12){
  greeting = 'Good Morning';
  cssStyle.color = "green";
}else if(curDate >=12 && curDate < 20){
  greeting = 'Good Afternoon';
  cssStyle.color = "orange";
}else{
  greeting = 'Good Night';
  cssStyle.color = "black";
}

ReactDOM.render(
  <>
    <div>
      <h1> Hello Sir, <span style = {cssStyle}>{greeting}</span> </h1>
    </div>
  </>,document.getElementById("root"));