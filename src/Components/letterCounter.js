import React, { useState } from 'react'
import './letterCounter.css'

export default function LetterCounter() {
    const [count, setCount] = useState(0);
    return (
        <>
            <h1 className="title">Letter <br></br>Count</h1>  
            <div className="count">
                <input className="input__count" onChange={(e) => setCount(e.target.value.length)}/>
                <span className="letter__count">Letter Count: {count}</span>
            </div>  
        </>
    );
}