
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
const Navbar = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                MUI
            </Typography>
            <Divider />
            <List>

                    <ListItem  disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={'test'} />
                        </ListItemButton>
                    </ListItem>

            </List>
        </Box>
    );
  return(

      <>

              <AppBar component="nav">
                  <Toolbar>
                      <IconButton
                          color="inherit"
                          aria-label="open drawer"
                          edge="start"
                          onClick={handleDrawerToggle}
                          sx={{ mr: 2, display: { sm: 'none' } }}
                      >
                          <MenuIcon />
                      </IconButton>
                      <Typography
                          variant="h6"
                          component="div"
                          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                      >
                          MUI
                      </Typography>
                      <Box sx={{ display: { xs: 'none', sm: 'block' } }}>

                          <Button  sx={{ color: '#fff' }}>
                              test
                          </Button>

                      </Box>
                  </Toolbar>
              </AppBar>
              <nav>
                  <Drawer

                      variant="temporary"
                      open={mobileOpen}
                      onClose={handleDrawerToggle}
                      ModalProps={{
                          keepMounted: true, // Better open performance on mobile.
                      }}
                      sx={{
                          display: { xs: 'block', sm: 'none' },
                          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '10rem' },
                      }}
                  >
                      {drawer}
                  </Drawer>
              </nav>



     </>
  )
}
export default Navbar;