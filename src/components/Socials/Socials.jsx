import React from 'react'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'

import { Typography } from '@mui/material'

import PhotoList from './PhotoList'
import './Socials.css'

import {FaCanadianMapleLeaf, FaThumbsUp, FaTiktok, FaInstagram } from 'react-icons/fa'
import { GiSpotedFlower } from 'react-icons/gi'
import { SiFacebook } from 'react-icons/si'
import FacebookIcon from '@mui/icons-material/Facebook';


const Socials = () => {
  return (
    <Grid container justifyContent="center" mt={0} spacing={2}>
      <Grid item xs={12} mb={0}>
        <Paper className="socials-block-top" elevation={0}><Typography variant="h2">Follow us for updates!</Typography></Paper>
      </Grid>
      <Grid container sx={{ flexGrow: 1 }} justifyContent="center" spacing={3} ml={2} mr={2}>
        <Grid item xs={4} md={4}>
          <Paper className="socials-icons-block" elevation={0}><FaInstagram className="instagram-icon" color=""/></Paper>
        </Grid>
        <Grid item xs={4} md={4}>
          <Paper className="socials-icons-block" elevation={0}><SiFacebook className="facebook-icon" color=""/></Paper>
        </Grid>
        <Grid item xs={4} md={4}>
          <Paper className="socials-icons-block" elevation={0}><FaTiktok className="tiktok-icon" color="" /></Paper>
        </Grid>
      </Grid>
      <Grid sx={{flexGrow: 1}}container directions="column" justifyContent="center" item xs={12} ml={2} mr={2}>
        <Paper className="socials-block" elevation={0}>
          <PhotoList />
        </Paper>
      </Grid>
      <Grid item xs={12} ml={2} mr={2}>
        <Paper className="socials-block" elevation={10}><Typography variant="subtitle1" >"I have new nails on everyday and these make it SO easy to become fancy AF"</Typography></Paper>
      </Grid>
    </Grid>
  )
}

export default Socials