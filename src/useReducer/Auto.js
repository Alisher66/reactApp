

import { useReducer } from 'react';
import "./auto.css";

const initialState = [
    {id:1, name: "enginev8", price: 450},
    {id:2, name: "спорт комплектация", price: 1450},
    {id:3, name: "sound sistem", price: 200},
    {id:4, name: "spoiler", price: 200},
];

function reducer(state, action) {
    switch (action.type) {
      case 'add':
        state.forEach(item => {if(item.id == action.payload.id) item.add = true} )
        return [...state]
      case 'remove':
        state.forEach(item => {if(item.id == action.payload.id) item.add = false} )
        return [...state]
      default:
        throw new Error();
    }
}
function init() {
    let temp = [...initialState]
    temp.forEach(item => item.add=false);
    return temp
} 
function Auto() {
    const [state, dispatch] = useReducer(reducer, initialState, init);
    let amount = 20000;

    return (
        
        <div className='wrap'>
            <div className='box'>
                
                <ul>
                   {state.map((item,index) => {
                       if(item.add){ 
                           amount+=item.price
                            return (
                                <li key = {index} >{item.name}  {item.price} 
                                        <button onClick={(e) => {e.preventDefault(); dispatch({type: "remove", payload:item})}}>remove
                                        </button>
                                </li>
                            )}
                   })}
                </ul>
                <span>total price {amount}</span>
            </div>
            <div className='box'>
                <p>Additional features</p>
                <ul>
                   {state.map((item,index) => {
                       if(!item.add)
                       return (
                           <li key = {index} >{item.name}  {item.price} 
                                <button onClick={(e) => {e.preventDefault(); dispatch({type: "add", payload:item})}}>add
                                </button>
                           </li>
                       )
                   })} 
                </ul>
            </div>
        </div>
    )
}

export default Auto;