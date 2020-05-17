import React, { useState } from 'react'
import './counter.css'

export default function Counter() {
    const [count, setCount] = useState(0);
    return (
        <>
            <h1 className="title">Counter</h1>
            <div className="counter">
                <h1 className="counter___count">{count}</h1>
                <section className="counter___section">
                    <button className="counter___button" onClick={() => setCount(count - 1)}>
                        <i className="fas fa-minus"></i>
                    </button>
                    <button className="counter___button" onClick={() => setCount(count + 1)}>
                        <i className="fas fa-plus"></i>
                    </button>
                </section>
            </div>
        </>
    );
}