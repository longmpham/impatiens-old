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
import Grid from '@mui/material/Grid'

import logo from '../../images/logo.png'
import './Navbar.css'

import CopyrightIcon from '@mui/icons-material/Copyright';

const BottomNavbar = () => {

    const pages = ['About','Products','Socials']

    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="sticky" className="bottom-nav">
            <Toolbar disableGutters>
                <Grid container alignItems="center">
                    <Grid container justifyContent="left" alignItems="left" item xs={4}>
                        {/* LEFT FOOTER ITEMS */}
                        {/* <Grid item><CopyrightIcon /></Grid> */}
                    </Grid>
                    <Grid item xs={4} textAlign="center" alignContent="center">
                        {/* LOGO */}
                        <img src={ logo } alt="Impatiens Logo" className="bottom-nav-logo"/>
                    </Grid>
                    <Grid container justifyContent="right" alignItems="right" item sx={{paddingRight: '10px'}} xs={4}>
                        {/* RIGHT FOOTER ITEMS */}
                        <Grid item><CopyrightIcon sx={{position: 'relative', top: '8px'}} /><Typography className="bottom-nav-right" variant="body">Made by Long</Typography></Grid>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
        </Box>
    );
}

export default BottomNavbar