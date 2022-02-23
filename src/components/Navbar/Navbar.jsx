// rafce

// Navbar -> Home (Logo) || About || Products || Socials || Login || Sidebar
// - Later - Shopping cart stuff
// - Later - Login
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

import logo from '../../images/logo.png'

import './Navbar.css'

const Navbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
                {/* UNCOMMENT FOR SIDE BAR */}
            {/* <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
                <MenuIcon />
            </IconButton> */}
            <Button color="inherit"><Link to="/"><img src={ logo } alt="Impatiens Logo"/></Link></Button>
            <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
                Impatiens
            </Typography>
            <Button color="inherit"><Link className="nav-menu" to="about">About</Link></Button>
            <Button color="inherit"><Link className="nav-menu" to="products">Products</Link></Button>
            <Button color="inherit"><Link className="nav-menu" to="socials">Socials</Link></Button>

            </Toolbar>
        </AppBar>
        </Box>
    );
}

export default Navbar