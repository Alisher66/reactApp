import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

// import AddWord from './task4/AddWord';
// import Words from "./task5/Words";
// import Contacts from "./task6/Contacts";
import ToDo from "./task7/ToDo";

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
  <ToDo />,
  document.getElementById('root')
);


reportWebVitals();