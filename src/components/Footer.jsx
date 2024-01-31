import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

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
            copyright &copy; made by Ionut Cora {newDate}
        </Typography>
    </Box>
  )
}

export default Footer;