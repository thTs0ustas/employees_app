import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import { navStyles } from './styles/navStyles';

const pages = ['Attributes', 'Employees', 'Map'];

const Navigation = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={navStyles.appBar}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={navStyles.logo} />
          <Typography as={Link} to="/" variant="h6" noWrap component="a" sx={navStyles.typography}>
            LOGO
          </Typography>

          <Box sx={navStyles.iconBox}>
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
              sx={navStyles.menu}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography
                    as={Link}
                    to={`/${page.toLowerCase()}`}
                    textAlign="center"
                    sx={navStyles.menuItem}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={navStyles.logo2} />
          <Typography
            as={Link}
            to="/"
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={navStyles.typography2}
          >
            LOGO
          </Typography>
          <Box sx={navStyles.iconBox2}>
            {pages.map((page) => (
              <Button
                as={Link}
                to={`/${page.toLowerCase()}`}
                key={page}
                onClick={handleCloseNavMenu}
                sx={navStyles.button}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export { Navigation };
