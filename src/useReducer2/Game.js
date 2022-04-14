

import { useReducer } from 'react';
import "./game.css";

const initialState = [
    {id:1, name: "red"},
    {id:2, name: "blue"},
    {id:3, name: "green"},
    {id:5, name: "white"},
    {id:6, name: "pink"},
    {id:7, name: "orange"},
];

function reducer(state, action) {
    switch (action.type) {
      case 'add':
        state.forEach(item => {if(item.id == action.payload.id) item.alive = true} )
        return [...state]
      case 'remove':
        state.forEach(item => {if(item.id == action.payload.id) item.alive = false} )
        return [...state]
      case 'reset':
          return init();
      default:
        throw new Error();
    }
}
function init() {
    let temp = [...initialState]
    temp.forEach(item => item.alive=true);
    return temp
} 
function Game() {
    const [state, dispatch] = useReducer(reducer, initialState, init);

    return (
        
        <div className='wrap'>
            <div className='box'>
                <button onClick={(e) => {e.preventDefault(); dispatch({type:"reset"})}}>Оживить</button>
            </div>
            <div className='box'>
                <ul>{state.map((item,index) => {
                    return (
                        <li key={index}>
                            {item.name}
                            <button onClick={
                                (e) => {
                                    e.preventDefault(); 
                                    item.alive ? dispatch({type:"remove", payload:item}): dispatch({type:"add", payload:item})
                                }
                            }>
                            {(item.alive) ? "Убить": "Возродить"}
                            </button> 
                        </li>
                    )
                })}</ul>
            </div>
        </div>
    )
}

export default Game;