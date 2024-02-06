import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import logo from '../assets/icons/buildings.svg';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

const pages = ['sale', 'rent', 'about', 'contact'];

function Navigation(props) {

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const darkTheme = createTheme({
        palette: {
          mode: 'dark',
          primary: {
            main: '#1976d2',
          },
        },
        typography: {
            fontFamily: [
              'Montserrat',
              'sans-serif'
            ].join(','),
        },
    });

  return (
    <ThemeProvider theme={darkTheme}>
        <AppBar 
            sx={{
                position: `${props.navPosition}`,
                backgroundColor: 'transparent', 
                boxShadow: 'none'
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{display: 'flex'}}>
                        <Box sx={{
                            display: { xs: 'none', md: 'flex' },
                            marginRight: '5px'
                        }}>
                            <img src={logo} alt="logo" />
                        </Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontWeight: 700,
                                letterSpacing: '.1rem',
                                color: orange[800],
                                textDecoration: 'none'
                            }}
                        >
                            React Agency
                        </Typography>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                            sx={{ color: `${props.textColor}` }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem>
                                <Typography 
                                    component='a' 
                                    textAlign="center" 
                                    href='/'
                                    sx={{
                                        color: 'white',
                                        textDecoration: 'none',
                                        textTransform: 'uppercase',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    home
                                </Typography>
                            </MenuItem>

                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography 
                                        component='a' 
                                        textAlign="center" 
                                        href={`/${page}`}
                                        sx={{
                                            color: 'white',
                                            textDecoration: 'none',
                                            textTransform: 'uppercase',
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        {page}
                                    </Typography>
                                </MenuItem>
                            ))}

                        </Menu>
                    </Box>
                    <Box sx={{
                        display: { xs: 'flex', md: 'none' },
                        marginRight: '5px'
                    }}>
                        <img src={logo} alt="logo" />
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontWeight: 700,
                            letterSpacing: '.1rem',
                            color: `${props.textColor}`,
                            textDecoration: 'none'
                        }}
                    >
                        React Agency
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'end' }}>
                        <Button 
                            href='/' 
                            sx={{ 
                                my: 2, 
                                color: `${props.textColor}`,
                                display: 'block',
                                fontWeight: 'bold' 
                            }}
                        >
                            Home
                        </Button>

                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                href={`/${page}`}
                                sx={{ 
                                    my: 2, 
                                    color: `${props.textColor}`, 
                                    display: 'block',
                                    textAlign: 'center',
                                    fontWeight: 'bold' 
                                }}>
                                {page}
                            </Button>
                        ))}

                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    </ThemeProvider>
  )
}

export default Navigation;