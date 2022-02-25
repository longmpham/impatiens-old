import React, { useState }from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, IconButton } from '@mui/material';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"
import nailList from '../../data';
import './Product.css'

// Icons
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';


const ProductPage = () => {

    const { _id } = useParams();
    const selectedProduct = nailList.find(nail => nail._id === _id);

    const [ index, setIndex ] = useState(0);

    const setImageIndex = (index) => {

        setIndex(index);

    }

    console.log(selectedProduct)

    return (
        <Grid container>
            {/* IMAGE */}
            <Grid item xs={12} md={8}>
            <Paper className="product-image-detail" elevation={12}>
                <img src={selectedProduct.image[index]} alt="main image" height="300"/>
            </Paper>
            </Grid>
            {/* NAME, DESCRIPTION, COST, BUY, */}
            <Grid item xs={12} md={4}>
                <Paper className="product-basic-detail" elevation={12}>
                    <Typography variant="h3">{selectedProduct.name}</Typography>
                    <Typography variant="h6">{selectedProduct.description}</Typography>
                    <Typography variant="h3">{selectedProduct.cost}</Typography>
                    <div className="product-image-thumbnail-detail">
                        {selectedProduct.image.map((image, index) => (
                            <img key={index} src={image} alt="thumbnail images" onClick={ () => { setImageIndex(index) }}/>
                        ))}
                    </div>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default ProductPage

