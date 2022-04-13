import React, { useState, useContext  } from "react";

 const ThemeContext = React.createContext();

 function Auth() {
    let { name, setName, login, setLogin}= useContext(ThemeContext);
   
    return (
        <div>
            <input value={name} onChange = {(e) =>{setLogin(false); setName(e.target.value)}} />
            <button onClick={()=> {setLogin(true)}} >log in</button>
        </div>
    );
}
 function MainContnet() {
    let { name, setName, login, setLogin} = useContext(ThemeContext);
    return (
        <p>{login ? name : ""}</p>
    )
}


export function Main() {
    
    const [name, setName] = useState("Ali");
    const [login, setLogin] = useState(false);

    return (
        <ThemeContext.Provider value={{ name, setName, login, setLogin}}>
            <Auth />
            <MainContnet />
        </ThemeContext.Provider>
    )
}