
import * as React from 'react';

import logo from '../../images/logo.png'
import './Navbar.css'
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';

import CopyrightIcon from '@mui/icons-material/Copyright';
import FolderIcon from '@mui/icons-material/Folder';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const FixedBottomNavigation = () => {

    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
  
    return (
        <BottomNavigation sx={{ position: "fixed", bottom: 0, left: 0, right: 0, backgroundColor: "lightblue", width: "100%" }} value={value} onChange={handleChange}>
            <BottomNavigationAction
            label="Recents"
            value="recents"
            icon={<RestoreIcon />}
            />
            <BottomNavigationAction
            label="Favorites"
            value="favorites"
            icon={<FavoriteIcon />}
            />
            <BottomNavigationAction
            label="Nearby"
            value="nearby"
            icon={<LocationOnIcon />}
            />
            <BottomNavigationAction 
            label="Folder" 
            value="folder" 
            icon={<FolderIcon />} 
            />
      </BottomNavigation>
    );
}

export default FixedBottomNavigation