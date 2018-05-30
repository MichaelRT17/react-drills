import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/signup'>SignUp</Link>
            <Link to='/details'>Details</Link>
        </nav>
    )
}