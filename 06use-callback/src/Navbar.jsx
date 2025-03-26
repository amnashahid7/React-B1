import React, { memo } from 'react'

const Navbar = ({ name, count, getName }) => {
    console.log("Navbar rendered");

    return (
        <div>Navbar {name}, {count}, {getName} </div>
    )
}

export default memo(Navbar);