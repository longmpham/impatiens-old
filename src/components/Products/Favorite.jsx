import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { IconButton } from '@mui/material';

const Favorite = () => {

  const [favorite, setFavorite] = React.useState(true);

  const handleSetFavorite = () => {
    setFavorite(favorite => !favorite)
  }

  return (
    <IconButton to="" color="primary" onClick={handleSetFavorite} aria-label="Add to your Favourites">{favorite ? <FavoriteBorderIcon /> : <FavoriteIcon />}</IconButton>
  )
}

export default Favorite