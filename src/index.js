import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

// import Words from "./task5/Words";
import AddWord from './task4/AddWord';
import Contacts from "./task6/Contacts";


// const wordsList = [
//   {text: "text1", author: "Dima"},
//   {text: "text2", author: "Dima2"},
//   {text: "text3", author: "Dima3"},
//   {text: "text4", author: "Dim4"},
//   {text: "text5", author: "Dima5"},
//   {text: "text6", author: "Dima6"},
// ]
// ReactDOM.render(
//   <Words words={wordsList} />,
//   document.getElementById('root')
// );


ReactDOM.render(
  <Contacts />,
  document.getElementById('root')
);


reportWebVitals();