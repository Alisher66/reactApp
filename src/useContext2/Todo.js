import React, { useState, useContext  } from "react";

const ThemeContext = React.createContext();

function Form() {
    const {text, setText, todos, setTodos} = useContext(ThemeContext);
    
    const save = (e) => {
        e.preventDefault();
        todos.push(text);
        setTodos([...todos]);
        setText("");
    }

    return (    
        <form onSubmit={(e) => {save(e)}}>
            <input type="text" value={text} onChange={(e) => {setText(e.target.value)}} />
            <input type="submit" value="save" />
        </form>
    )
}

function TodoList() {
    const {text, setText, todos, setTodos} = useContext(ThemeContext);

    return (
        <ul>
            {todos.map((todo,index)=>{
                return (
                    <li key={index}>{todo}</li>
                )
            })}
        </ul>
    )
}

export function Main() {
    const [text, setText] = useState("");
    const [todos, setTodos] = useState([]);
    return (
        <ThemeContext.Provider value={{text, setText, todos, setTodos}}>
            <Form />
            <TodoList />
        </ThemeContext.Provider>
    )
}

