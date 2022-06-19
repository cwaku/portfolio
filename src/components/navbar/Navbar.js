import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { Link } from 'react-router-dom';

// Returns a list of pages.
const pages = [
  { title: 'Home', appBarSx: { display: { xs: 'none', md: 'block' } } },
  { title: 'About', appBarSx: { display: { xs: 'none', md: 'block' } } },
  { title: 'Projects', appBarSx: { display: { xs: 'block' } } },
  { title: 'Contact', appBarSx: { display: { xs: 'none', md: 'block' } } },
];

// Hide On Scroll
function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

// HideOnScroll. propTypes
HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

// Creates a navigation bar with a menu and a title.
const Navbar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <HideOnScroll {...props}>
      <AppBar
      sx={{
        backgroundColor: '#171718',
      }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                marginLeft: { xs: '0', md: '50px' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              RM
            </Typography>
            <Box sx={{ flexGrow: 0.1, display: { xs: 'flex' } }}>
              {pages.map((page) => {
                const sx = {
                  ...{ my: 2, color: 'white', display: 'block' },
                  ...page.appBarSx,
                };

                return (
                  <Button
                    key={page.title}
                    onClick={handleCloseNavMenu}
                    sx={sx}
                  >
                    <Link style={{ textDecoration: 'none', color: 'white' }} to={`/${page.title.toLowerCase()}`}>
                      {page.title}
                    </Link>
                  </Button>
                );
              })}
            </Box>

            <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
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
                {/* Adds a menu item to the navigation menu. */}
                {pages.map((page) => (
                  <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                      <Link style={{ textDecoration: 'none', color: 'white' }} to={`/${page.title.toLowerCase()}`}>{page.title}</Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
};

export default Navbar;
