import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Route, Link, Routes, useLocation, useNavigate } from 'react-router-dom';
import { ExitToApp } from '@mui/icons-material';
import { Button } from '@mui/material';
import axios from 'axios';
import { apiUrl } from '../../../utils/apiUrl';
import { useDispatch } from 'react-redux';
import { authAdmin } from '../../../redux/actions/user/authAdmin';
import { useSelector } from 'react-redux';

const drawerWidth = 240;
const getTitlePage = (path) => {
  switch (path) {
    case '/admin/page/create':
      return 'Новая страница';
    case '/admin/news/create':
      return 'Новая новость';
    case '/admin/game/create':
      return 'Новая игра';
    case '/admin/pages':
      return 'Вложениые игры';
    case '/admin/parent-games':
      return 'Вложенные игры';
    case '/admin/games':
      return 'Игры';
    default:
      {
        if (path.slice(0, 20) === '/admin/game/update/') {
          return 'Редактирование игры';
        }
        if (path.slice(0, 19) === '/admin/page/update/') {
          return 'Редактирование страницы';
        }
        if (path.slice(0, 19) === '/admin/news/update/') {
          return 'Редактирование новости';
        }
      }
      break;
  }
};
const AdminLayout = (props) => {
  const { window, children } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    authAdmin: { data: authData, error: authError },
  } = useSelector((state) => state.user);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  React.useEffect(() => {
    dispatch(authAdmin());
  }, []);

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem key={1} disablePadding>
          <ListItemButton
            onClick={() => {
              navigate('/admin/comments');
            }}
            selected={location.pathname == '/admin/comments'}>
            <ListItemText primary={'Отзывы'} />
          </ListItemButton>
        </ListItem>
        <ListItem key={1} disablePadding>
          <ListItemButton
            onClick={() => {
              navigate('/admin/orders');
            }}
            selected={location.pathname == '/admin/orders'}>
            <ListItemText primary={'Покупки'} />
          </ListItemButton>
        </ListItem>
        <ListItem key={1} disablePadding>
          <ListItemButton
            onClick={() => {
              navigate('/admin/banners');
            }}
            selected={location.pathname == '/admin/banners'}>
            <ListItemText primary={'Баннеры'} />
          </ListItemButton>
        </ListItem>
        <ListItem key={2} disablePadding>
          <ListItemButton
            onClick={() => {
              navigate('/admin/support-list');
            }}
            selected={location.pathname == '/admin/support-list'}>
            <ListItemText primary={'Поддержка'} />
          </ListItemButton>
        </ListItem>
        <ListItem key={3} disablePadding>
          <ListItemButton
            onClick={() => {
              navigate('/admin/games');
            }}
            selected={location.pathname == '/admin/games'}>
            <ListItemText primary={'Игры'} />
          </ListItemButton>
        </ListItem>
        <ListItem key={4} disablePadding>
          <ListItemButton
            onClick={() => {
              navigate('/admin/parent-games');
            }}
            selected={location.pathname == '/admin/parent-games'}>
            <ListItemText primary={'Вложенные игры'} />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    authData && (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}>
          <Toolbar>
            <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: 'none' } }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              {getTitlePage(location.pathname)}
            </Typography>
            <Button variant="contained" color="error" sx={{ boxShadow: 'none !important', ml: 'auto', color: 'white' }} endIcon={<ExitToApp sx={{ color: 'white' }} />}>
              Выход
            </Button>
          </Toolbar>
        </AppBar>
        <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}>
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open>
            {drawer}
          </Drawer>
        </Box>
        <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
          <Toolbar />
          {children}
        </Box>
      </Box>
    )
  );
};

export default AdminLayout;
