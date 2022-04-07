import {useState} from 'react';

function Links() {
    const [id, setId] = useState("nothing");
    const [words, setWords] = useState([{text:"link 1"}, {text:"link 2"}]);

    const addWord = () => {
        words.push({text:`item ${words.length+1}`})
        setWords([...words])
    }

    const showWords = () =>{
        return (
            <ul>
                {words.map((word,index) => {
                    return (
                        <li onClick={() => setId(index+1)}>{word.text}</li>
                    )
                })}
            </ul>
        )
    }
    return (
        <div>
            <p>cliked {id} </p>
            {showWords()}
            <button onClick={() => addWord()}>add</button>
        </div>
    )
}

export default Links;