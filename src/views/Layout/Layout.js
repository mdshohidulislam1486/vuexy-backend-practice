import React, { useState } from 'react';
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from 'react-pro-sidebar';
import { FcComboChart } from 'react-icons/fc';
import { BiMap } from 'react-icons/bi';
import { FaThemeisle } from 'react-icons/fa';
import { BsRecordCircle, BsFillMenuButtonWideFill } from 'react-icons/bs';
import brandLogo from '../../assets/images/ab-backend/logo/logo.png';
import { Link, Outlet } from 'react-router-dom';
import NavbarTop from './navbar-top';
import { Box } from '@mui/material';
import { Sticky, StickyContainer } from 'react-sticky';

const Layout = () => {
  const { collapseSidebar } = useProSidebar();
  const [toggle, setToggle] = useState(false);

  const collapseNavbar = () => {
    setToggle(!toggle);
    collapseSidebar();
  };

  const collapseMenu = () => {
    if (toggle) return;
    collapseSidebar();
  };

  return (
    <div style={{ display: 'flex' }} className="sidebar-container-section">
      <Box
        sx={{
          position: { xs: 'absolute', sm: 'relative' },
          maxHeight: { xs: '100vh' },
        }}
      >
        <Sidebar className="sidebar-main">
          <div className={`logo-container ${toggle ? 'flex-change' : ''}`}>
            <Link to="/">
              <img
                src={brandLogo}
                alt="noe-pp"
                className={`logo-image ${toggle ? 'display-none' : ''}`}
              />
            </Link>
            {toggle ? (
              <BsFillMenuButtonWideFill onClick={() => collapseNavbar()} />
            ) : (
              <BsRecordCircle onClick={() => collapseNavbar()} />
            )}
          </div>
          <Menu className="menu-container">
            <SubMenu icon={<FcComboChart />} label="Dashboard">
              <Link to="/ecommarce">
                <MenuItem>Ecommarce</MenuItem>
              </Link>
              <Link to="input">
                <MenuItem> Inputs</MenuItem>
              </Link>
              <Link to="#">
                <MenuItem> Bar charts</MenuItem>
              </Link>
            </SubMenu>
            <SubMenu icon={<FaThemeisle />} label="Product Upload">
              <Link to="/ecommarce">
                <MenuItem>Ecommarce</MenuItem>
              </Link>
              <Link to="input">
                <MenuItem> Line charts</MenuItem>
              </Link>
              <Link to="#">
                <MenuItem> Bar charts</MenuItem>
              </Link>
            </SubMenu>
            <SubMenu icon={<BiMap />} label="All Products">
              <Link to="/ecommarce">
                <MenuItem>Ecommarce</MenuItem>
              </Link>
              <Link to="input">
                <MenuItem> Line charts</MenuItem>
              </Link>
              <Link to="#">
                <MenuItem> Bar charts</MenuItem>
              </Link>
            </SubMenu>
          </Menu>
        </Sidebar>
      </Box>
      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: '#f9f9f9',
          flex: 'auto',
        }}
      >
        <StickyContainer topOffset={80}>
          <Box sx={{ margin: { xs: '2em .5em 2em 5.5em', sm: '2em' } }}>
            <Sticky topOffset={-20} bottomOffset={95}>
              {({ style, isSticky }) => {
                return (
                  <div
                    style={{
                      ...style,
                      marginTop: isSticky ? 10 : 0,
                      background: isSticky ? '#fff' : 'transparent',
                      zIndex: isSticky ? 10 : 1,
                      transition: `${
                        isSticky ? 'margin-top .3s ease-in .1s' : 'unset'
                      }`,
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <NavbarTop />
                  </div>
                );
              }}
            </Sticky>
            <Outlet />
          </Box>
        </StickyContainer>
      </Box>
    </div>
  );
};

export default Layout;
