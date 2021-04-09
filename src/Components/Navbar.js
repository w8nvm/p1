import React from "react";
import {useState} from 'react';
import Button from '@material-ui/core/Button'

function Navbar() {
    const [count, setCount] = useState(0);

    return (
            <React.Fragment>
                <Button onClick = {() => setCount(count+1)} variant="contained" />
                <nav className="navbar navbar-dark bg-dark mb-3">
                    <a className="navbar-brand" href="/">
                        <h1>Total Items <span className="badge badge-secondary">{count}</span></h1>
                    </a>
                </nav>
            </React.Fragment>
        );
    }

export default Navbar;