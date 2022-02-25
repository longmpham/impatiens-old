import React from 'react'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'

import './About.css'


const About = () => {
  return (
    <Grid container justifyContent="center" mt={3} spacing={2}>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={12} md={4}>
          {/* CONSIDER DOING A SMALLER COMPONENT? */}
          <Paper className="about-block" elevation={10}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          {/* CONSIDER DOING A SMALLER COMPONENT? */}
          <Paper className="about-block" elevation={10}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          {/* CONSIDER DOING A SMALLER COMPONENT? */}
          <Paper className="about-block" elevation={10}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Paper>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        {/* CONSIDER DOING A SMALLER COMPONENT? */}
        <Paper className="about-block" elevation={10}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Paper>
      </Grid>

    </Grid>
  )
}

export default About