// import React from 'react';

import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>

            <h2>This is header</h2>
        </div>
    );
};

export default Header;