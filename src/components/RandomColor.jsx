import { useState } from "react"


function RandomColor() {
    const [red, setRed] = useState(Math.floor(Math.random() * 255) + 1)
    const [green, setGreen] = useState(Math.floor(Math.random() * 255) + 1)
    const [blue, setBlue] = useState(Math.floor(Math.random() * 255) + 1)
    const bgColor = `rgb(${red}, ${green}, ${blue})`
    document.body.backgroundColor = bgColor
    function randomBg() {
        setRed(Math.floor(Math.random() * 255) + 1)
        setGreen(Math.floor(Math.random() * 255) + 1)
        setBlue(Math.floor(Math.random() * 255) + 1)
    }
    function copyBg() {
        navigator.clipboard.writeText(bgColor)
        alert("Copied!")
    }
    return(
        <div className="content-box">
            <style>
                {`body {
                    background-color: ${bgColor};
                }`}
            </style>
            <p>Current Color: rgb({red}, {green}, {blue})</p>
            <button onClick={() => randomBg()}>Random Color</button>
            <button onClick={() => copyBg()}>Copy</button>
        </div>
    )
}

export default RandomColor