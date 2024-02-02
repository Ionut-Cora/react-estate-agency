import React from 'react';
import { Box, Button } from '@mui/material';
import TextField from '@mui/material/TextField';

function ContactForm() {
  return (
    <Box sx={{
        width: { sx: '100%', md: '60%' }
    }}>
        <form style={{
            display: 'flex',
            flexDirection: 'column'
        }}>
            <TextField id="first-name" label="First Name" variant="outlined" sx={{marginBottom: '1rem'}} />
            <TextField id="last-name" label="Last Name" variant="outlined" sx={{marginBottom: '1rem'}} />
            <TextField id="address" label="Your Address" variant="outlined" sx={{marginBottom: '1rem'}} />
            <TextField id="comment" label="Your Comment" multiline variant="outlined" maxRows={4} sx={{marginBottom: '1rem'}} />
            <Box>
                <Button variant='contained' 
                        color='warning' 
                        size='large'
                >
                    Submit
                </Button>
            </Box>
        </form>
    </Box>
  )
}

export default ContactForm;