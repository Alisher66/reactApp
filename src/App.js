import React from 'react';
import ReactDOM from 'react-dom';
 
import reportWebVitals from './reportWebVitals';

 var InputComponent=React.createClass({
   getInitialState:function(){
     return {
       value:""
     }
   },

   handleChange:function(event){
     this.setState({
       value:event.target.value
     });
   },

   render:function(){
    return (
      <form>
      <input type="text" placeHolder="Input Text" onChange={this.handleChange}/>
      <h1>{this.state.value !='' ? "Entering...." + this.state.value : ''}</h1>
      </form>
    )
   }
 });


ReactDOM.render(
  
    <InputComponent />,
 
  document.getElementById('root')
);

 
reportWebVitals();