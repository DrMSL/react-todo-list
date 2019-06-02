import React from 'react';
import { Link } from 'react-router-dom'

const date = new Date()
const hours = date.getHours()
const minutes = date.getMinutes()

let timeOfDay

if (hours < 12) {
    timeOfDay = "morning"
} else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
} else if (hours >= 17 && hours < 21) {
    timeOfDay = "evening"
}
else {
    timeOfDay = "night"
}

let ampm
if (hours < 12) {
    ampm = "am"
} else {
    ampm = "pm"
}

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Todo List</h1>
            <p style={{ fontStyle: "italic", color: "#ccc" }}>Hi there. Hope you are having a good {timeOfDay}. <br>
            </br>(It's currently {date.getHours() % 12}:{minutes} {ampm})</p>
            <Link style={ linkStyle } to="/">Home</Link> / <Link style={linkStyle} to="/about">About</Link> 
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    padding: '10px',
    textAlign: 'center'
}

const linkStyle = {
    color: '#fff',
    textDecortation: 'none'
}

export default Header;