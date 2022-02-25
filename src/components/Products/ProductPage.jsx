import React from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, IconButton } from '@mui/material';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"
import nailList from '../../data';


// Icons
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';

const ProductPage = () => {

    const { _id } = useParams();
    const selectedProduct = nailList.find(nail => nail._id === _id)

    return (
        <Grid container>
            <Grid item xs={12} md={8}>
                <Card sx={{ maxWidth: 345 }} key={selectedProduct._id}>
                    <CardActionArea component={Link} to={`/Products/${selectedProduct._id}`}>
                    {/* <CardActionArea component={Link} to={"/Products/"+selectedProduct._id} onClick={() => <ProductPage {...selectedProduct} />}> */}
                    <CardMedia component="img" height="200" image={selectedProduct.image} alt={selectedProduct.alt}/>
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div">{selectedProduct.name}</Typography>
                        <Typography variant="body2" color="text.secondary">{selectedProduct.description}</Typography> {/* add noWrap if you want ellipsis */}
                        <Typography variant="h6" color="text.primary">${selectedProduct.cost}</Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <IconButton component={ Link } to="/" color="primary" aria-label="Add to your Favourites"><FavoriteBorderIcon size="large"/></IconButton>
                    <IconButton component={ Link } to="/"color="primary" aria-label="Share this product"><ShareIcon size="large"/></IconButton>
                    <IconButton component={ Link } to="/"color="primary" aria-label="Add to shopping cart"><AddShoppingCartIcon size="large"/></IconButton>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>

    )
}

export default ProductPage