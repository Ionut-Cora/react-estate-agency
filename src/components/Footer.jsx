import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Footer() {

    const [newDate, setNewDate] = useState('');

    useEffect(() => {
        let todayDate = new Date();
        let todayYear = todayDate.getFullYear();
        setNewDate([todayYear]);
    }, []);

  return (
    <Box>
        <Typography sx={{ textAlign: 'center', padding: '1rem' }}>
            copyright {newDate} &copy; made by <Link to='https://www.ionutcora.com/' style={{textDecoration: 'none', color: '#000000'}} target="_blank">Ionut Cora</Link>
        </Typography>
    </Box>
  )
}

export default Footer;