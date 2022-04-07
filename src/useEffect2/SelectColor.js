import {useState, useEffect} from 'react';

function SelectColor() {
    const [id, setId] = useState(0);

    const colors = ["blue", "yellow","red"];

    useEffect(() =>{
        document.body.style.background = colors[id];
    });
    
    return (
        <div>
            <select onChange={(e) => {setId(+e.target.value)}}>
                <option value="0">Sea</option>
                <option value="1">Sand</option>
                <option value="2">Peach</option>
            </select>
        </div>
    )

    
}

export default SelectColor;