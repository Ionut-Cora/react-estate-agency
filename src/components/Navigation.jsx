import React from 'react';
import './Navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import { Link } from 'react-router-dom';

const pages = ['sale', 'rent', 'about', 'contact'];

function Navigation() {
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
                position: 'relative',
                backgroundColor: orange[800], 
                boxShadow: 'none'
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Link 
                        to='/' 
                        style={{
                            textDecoration: 'none',
                            color: '#FFFFFF'
                        }}
                    >
                        <Box sx={{display: 'flex'}}>
                            <Box sx={{
                                display: { xs: 'none', md: 'flex' },
                                marginRight: '10px',
                            }}>
                                <FontAwesomeIcon icon={faHouse} size='xl' />
                            </Box>
                            <Typography
                                variant="h6"
                                noWrap
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    fontWeight: 700,
                                    letterSpacing: '.1rem',
                                    color: 'white',
                                    textDecoration: 'none',
                                    textAlign: 'start'
                                }}
                            >
                                Percival Est.
                            </Typography>
                        </Box>
                    </Link>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
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
                                <Link 
                                    to='/'
                                    style={{
                                        textAlign: 'center',
                                        color: 'white',
                                        textDecoration: 'none',
                                        textTransform: 'uppercase',
                                        fontWeight: 'bold',
                                        padding: '5px',
                                        letterSpacing: '1px'
                                    }}
                                >
                                    Home
                                </Link>
                            </MenuItem>
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Link 
                                        to={`/${page}`}
                                        style={{
                                            textAlign: 'center',
                                            color: 'white',
                                            textDecoration: 'none',
                                            textTransform: 'uppercase',
                                            fontWeight: 'bold',
                                            padding: '5px',
                                            letterSpacing: '1px'
                                        }}
                                    >
                                        {page}
                                    </Link>
                                </MenuItem>
                            ))}

                        </Menu>
                    </Box>
                    <Link 
                        to='/' 
                        style={{
                            textDecoration: 'none', 
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <Box sx={{
                            display: { xs: 'flex', md: 'none' },
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: '#FFFFFF'
                        }}>
                            <Box sx={{
                                display: { xs: 'flex', md: 'none' },
                                marginRight: '10px'
                            }}>
                                <FontAwesomeIcon icon={faHouse} size='xl' />
                            </Box>
                            <Typography
                                variant="h5"
                                noWrap
                                sx={{
                                    mr: 2,
                                    display: { xs: 'flex', md: 'none' },
                                    flexGrow: 1,
                                    fontSize: '16px',
                                    fontWeight: 700,
                                    letterSpacing: '.1rem',
                                    color: 'white',
                                    textDecoration: 'none'
                                }}
                            >
                                Percival Est.
                            </Typography>
                        </Box>
                    </Link>
                    <Box 
                        sx={{ 
                            flexGrow: 1, 
                            display: { xs: 'none', md: 'flex' }, 
                            justifyContent: 'end',
                            alignItems: 'center'
                        }}>
                        <Link 
                            to='/'
                            style={{
                                color: 'white',
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                                textDecoration: 'none',
                                letterSpacing: '1px'
                            }}
                        >
                            home
                        </Link>
                        {pages.map((page) => (
                            <Link 
                                key={page}
                                onClick={handleCloseNavMenu}
                                to={`/${page}`}
                                style={{
                                    color: 'white',
                                    fontWeight: 'bold',
                                    textTransform: 'uppercase',
                                    marginLeft: '15px',
                                    textDecoration: 'none',
                                    letterSpacing: '1px'
                                }}
                            >
                                {page}
                            </Link>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    </ThemeProvider>
  )
}

export default Navigation;