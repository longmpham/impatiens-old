import React, { useState, useEffect }from 'react'
import axios from 'axios'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, IconButton } from '@mui/material';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"
// import nailList from '../../data';
import './Product.css'

// Icons
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';


const ProductPage = (props) => {

    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState([]);


    useEffect(() => {

        const fetchData = async () => {

            // loading...
            setLoading(true);

            const response = await axios.get("http://jsonplaceholder.typicode.com/albums/1/photos", {
                params: {
                    id
                }
            });
            // console.log(response)
            // console.log(response.data[0])
            setProduct(response.data[0]);
            setLoading(false);
        }
        fetchData();
    }, []);

    // const selectedProduct = nailList.find(nail => nail.id === id_selected);

    // const [ index, setIndex ] = useState(0);

    // const setImageIndex = (index) => {
    //     setIndex(index);
    // }

    return (
        <Grid container>
            {/* IMAGE */}
            <Grid item xs={12} md={8}>
            <Paper className="product-image-detail" elevation={12}>
                {/* <img src={product.image[index]} alt="main image" height="300"/> */}
                <img key={product.id} src={product.url} alt={product.thumbnailUrl} />
            </Paper>
            </Grid>
            {/* NAME, DESCRIPTION, COST, BUY, */}
            <Grid item xs={12} md={4}>
                <Paper className="product-basic-detail" elevation={12}>
                    <Typography variant="h3">{product.title}</Typography>
                    <Typography variant="h6">{product.description} TEMP DESCR</Typography>
                    <Typography variant="h3">${product.cost} TEMP #</Typography>
                    <div className="product-image-thumbnail-detail">
                    <img key={product.id} src={product.url} alt={product.thumbnailUrl} />
                    <img key={1} src={product.url} alt={product.thumbnailUrl} />
                    <img key={2} src={product.url} alt={product.thumbnailUrl} />
                    </div>
                    
                    {/* <div className="product-image-thumbnail-detail">
                        {product.image.map((image, index) => (
                            <img key={index} src={image} alt="thumbnail images" onClick={ () => { setImageIndex(index) }}/>
                        ))}
                    </div> */}
                    <IconButton component={ Link } to="/" color="primary" aria-label="Add to your Favourites"><FavoriteBorderIcon size="large"/></IconButton>
                    <IconButton component={ Link } to="/"color="primary" aria-label="Share this product"><ShareIcon size="large"/></IconButton>
                    <IconButton component={ Link } to="/ShoppingCart"color="primary" aria-label="Add to shopping cart"><AddShoppingCartIcon size="large"/></IconButton>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default ProductPage

