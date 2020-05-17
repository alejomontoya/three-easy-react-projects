import React from 'react'
import './changeBackground.css'

export default function ChangeBackground() {

    const getRandomColor = () => {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    const changeColor = () => {
        document.documentElement.style
        .setProperty('--background', getRandomColor());
    }
    return (
        <>
        <h1 className="title">Background <br></br> color changer</h1>
        <button className="button__change" onClick={changeColor}>CHANGE BACKGROUND</button>
        </>
    )
}