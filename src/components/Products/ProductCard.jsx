import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, IconButton } from '@mui/material';
import { Link } from "react-router-dom";

// Icons
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';

const ProductCard = ( props ) => {

  console.log(props)
  

  return (
    <Card sx={{ maxWidth: 345 }} key={props.id}>
      <CardActionArea component={Link} to={`/Products/${props.id}`}>
        <CardMedia component="img" height="200" image={props.url} alt={props.thumbnailUrl}></CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">{props.title}</Typography>
          <Typography variant="body2" color="text.secondary">{props.description}temporary description</Typography> {/* add noWrap if you want ellipsis (descr...) */}
          <Typography variant="h6" color="text.primary">$temporary{props.cost}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton component={ Link } to="/" color="primary" aria-label="Add to your Favourites"><FavoriteBorderIcon size="large"/></IconButton>
        <IconButton component={ Link } to="/"color="primary" aria-label="Share this product"><ShareIcon size="large"/></IconButton>
        <IconButton component={ Link } to="/"color="primary" aria-label="Add to shopping cart"><AddShoppingCartIcon size="large"/></IconButton>
      </CardActions>
    </Card>
  )
}

export default ProductCard