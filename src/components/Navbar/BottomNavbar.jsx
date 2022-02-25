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
        <Box sx={{ flexGrow: 1 }} className="min-h-screen">
        <AppBar position="sticky" className="bottom-nav">
            <Toolbar disableGutters>
                <Grid container alignItems="center">
                    <Grid container justifyContent="left" alignItems="center" item xs={3}>
                        {/* LEFT FOOTER ITEMS */}
                        {/* <Grid item><CopyrightIcon /></Grid> */}
 
                    </Grid>
                    <Grid item xs={6} textAlign="center" alignContent="center">
                        {/* LOGO */}
                        <img src={ logo } alt="Impatiens Logo" className="bottom-nav-logo"/>
                    </Grid>
                    <Grid container justifyContent="right" alignItems="center" item sx={{paddingRight: '10px'}} xs={3}>
                        {/* RIGHT FOOTER ITEMS */}
                        <Grid item><CopyrightIcon /></Grid>
                        <Grid item><Typography className="bottom-nav-right" variant="body">Made by Long</Typography></Grid>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
        </Box>
    );
}

export default BottomNavbar