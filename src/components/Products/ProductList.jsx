import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Grid from '@mui/material/Grid';


import ProductCard from './ProductCard'
// import nailList from '../../data.js'
// import ProductListAsync from './ProductListAsync';



const ProductList = () => {

  const [loading, setLoading] = useState(false);
  const [nailList, setNailList] = useState([]);

  useEffect(() => {

      const fetchData = async () => {

          // 1. loading screen
          // 2. get promise (await for data)
          // 3. setdata and/or log
          // 4. set loading false
          // 5. call function

          // loading...
          setLoading(true);

          const result = await axios.get("http://jsonplaceholder.typicode.com/albums/1/photos"); // calls from ./public folder cuz axios...

          // console.log(result.data);

          setNailList(result.data);
          setLoading(false);
      }
      fetchData();
  }, []);

  return (
    <Grid container spacing={3} sx={{ marginTop: "0px", marginLeft: "0px", marginRight: "0px"}} pr={5}>
        {loading ? (<h4>Loading...</h4>) :
          // grab data here and push through to individual product
          nailList.map(nail => (
            <Grid item key={nail.id} xs={12} sm={6} md={4} lg={3}>
              <ProductCard {...nail}/>
            </Grid>
          ))
        } 
    </Grid>
  )
}

export default ProductList