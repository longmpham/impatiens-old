import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, IconButton } from '@mui/material';

// Icons
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';

const Product = ( props ) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.image}
          alt={props.alt}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">{props.name}</Typography>
          <Typography variant="body2" color="text.secondary">{props.description}</Typography>
          <Typography variant="h6" color="text.primary">${props.cost}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton color="primary" aria-label="Add to shopping cart"><FavoriteBorderIcon size="large"/></IconButton>
        <IconButton color="primary" aria-label="Add to shopping cart"><ShareIcon size="large"/></IconButton>
        <IconButton color="primary" aria-label="Add to shopping cart"><AddShoppingCartIcon size="large"/></IconButton>
      </CardActions>
    </Card>
  )
}

export default Product

// _id: 2,
// name: 'Nail2',
// image: require('./images/nails/nail2.png'),
// alt: 'nail2art',
// description: 'nail3desc',
// cost: 88,