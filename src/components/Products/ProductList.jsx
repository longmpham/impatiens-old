// this component may or may not be needed. We use this one to populate the products. Product should be just the single card
// and then here we call those single cards.
// need to think dynamically.

import React from 'react'
import Grid from '@mui/material/Grid';


import Product from './Product'
import nailList from '../../data.js'

const ProductList = () => {
  
  

  return (
    <Grid container spacing={3} sx={{ marginTop: "0px", marginLeft: "0px", marginRight: "23px"}}>
        {/* grab data here and push through to individual product */}
        {nailList.map(nail => (
          <Grid item key={nail.id} xs={12} sm={6} md={4} lg={2}>
            <Product {...nail}/>
          </Grid>
        ))}
    </Grid>

  )
}

export default ProductList