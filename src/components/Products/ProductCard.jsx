import React from 'react'
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
import ProductPage from './ProductPage';

const ProductCard = ( props ) => {
  return (
    <Card sx={{ maxWidth: 345 }} key={props._id}>
      {/* <CardActionArea component={Link} to={"/Products/"+props._id} onClick={() => console.log(...props)}> */}
      <CardActionArea component={Link} to={"/Products/"+props._id} onClick={() => <ProductPage {...props} />}>
        <CardMedia component="img" height="200" image={props.image} alt={props.alt}/>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">{props.name}</Typography>
          <Typography variant="body2" color="text.secondary">{props.description}</Typography> {/* add noWrap if you want ellipsis */}
          <Typography variant="h6" color="text.primary">${props.cost}</Typography>
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

// _id: 2,
// name: 'Nail2',
// image: require('./images/nails/nail2.png'),
// alt: 'nail2art',
// description: 'nail3desc',
// cost: 88,