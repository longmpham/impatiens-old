import React from 'react'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'

import './Home.css'
import { Typography } from '@mui/material'

import {FaCanadianMapleLeaf, FaThumbsUp } from 'react-icons/fa'
import { GiSpotedFlower } from 'react-icons/gi'

const HomeAbout = () => {
  return (
    <Grid container justifyContent="center" mt={3} spacing={2}>
      <Grid item xs={12} mb={3}>
        <Paper className="about-block" elevation={0}><Typography variant="h2">Impatient about Impatiens?</Typography></Paper>
      </Grid>
      <Grid container justifyContent="center" spacing={2} ml={2} mr={2}>
        <Grid item xs={12} md={4}>
          <Paper className="about-block" elevation={5}><Typography variant="h3"><FaCanadianMapleLeaf color='red'/>Canadian Made</Typography></Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className="about-block" elevation={5}><Typography variant="h3"><GiSpotedFlower color="blue"/>Organic Materials</Typography></Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className="about-block" elevation={5}><Typography variant="h3"><FaThumbsUp color="#ffcc33" />Hand Crafted</Typography></Paper>
        </Grid>
      </Grid>
      <Grid item xs={12} ml={2} mr={2}>
        <Paper className="about-block" elevation={0}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Paper>
      </Grid>
      <Grid item xs={12} ml={2} mr={2}>
        <Paper className="about-block" elevation={10}><Typography variant="subtitle1" >"I have new nails on everyday and these make it SO easy to become fancy AF"</Typography></Paper>
      </Grid>
    </Grid>
  )
}

export default HomeAbout