import React from 'react'
import "./Navbar.css"
import Avatar from '@mui/material/Avatar';
import { blue } from '@mui/material/colors';

const Navbar = () => {
    return (
        <>
            <header>
                <nav>
                    <h1>Home</h1>
                    <div className='avtar'>
                        <Avatar style={{ background: 'blue' }}>H</Avatar>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar