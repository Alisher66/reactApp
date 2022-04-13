import React from 'react';
import { useState, useCallback } from 'react';

const add = (fst, snd) => fst + snd;

const MyComponent2 = () => {
    const [num, setNum] = useState(0);
    const [rand, setRand] = useState(0);

    const getRandom = () => {
        let r = parseInt(Math.random() * 10);
        setRand(r);
    }
    const total = useCallback(add(num, rand), [num,rand])
    
    const increment = () => setNum(num => num + 1);
    return (
        <>
            <section className='box'>
                
                
                <span>random number: {rand}</span><br/>
                <span>number: {num}</span><br/>
                <span>random + num: {total}</span><br/>
                <button onClick={() => {increment(); getRandom()} }> + 1 </button>
            </section>

        </>
    )

}



export default MyComponent2;
