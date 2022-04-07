import {useState, useEffect} from 'react';

function Position() {
    const [count, setCount] = useState(0);


    useEffect(() => {
        const el = document.querySelector("#mouse_position");
        document.addEventListener("mousemove", (e) =>{
            el.textContent = `
            Position X = ${e.pageX}
            Position Y = ${e.pageY}`;
        })
    })

    return (
        <div>
            <p>cliked {count} times </p>
            <button onClick={() => setCount(count+1)}>click</button>
            <p id="mouse_position"></p>
        </div>
    )
}

export default Position;