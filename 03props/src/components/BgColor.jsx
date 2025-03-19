import React, { useState } from 'react'

const BgColor = () => {
    const [color, setColor] = useState("yellow")
    return (
        <>
            <div style={{ backgroundColor: color, width: "100%", height: "100vh" }}>
                <div>
                    <button className='btn btn-danger' onClick={() => setColor("red")}>Red</button>
                    <button className='btn btn-primary' onClick={() => setColor("blue")}>Blue</button>
                    <button className='btn btn-warning' onClick={() => setColor("orange")}>Orange</button>
                    <button className='btn btn-success' onClick={() => setColor("green")}>Green</button>
                </div>
            </div>
        </>
    )
}

export default BgColor;