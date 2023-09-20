import React from 'react';
import styles from './Navbar.module.scss';
import NavbarMenu from '../NavbarMenu/NavbarMenu';
import NavbarRight from '../NavbarRight/NavbarRight';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MenuBurger from '../MenuBurger/MenuBurger';
const Navbar = () => {
  return (
    <>
      <div className={clsx(styles.wrap)}>
        <div className="container">
          <div className={clsx(styles.inner)}>
            <MenuBurger />
            <Link to="/" className={clsx(styles.logo)}>
              <img src="../img/logo.svg" alt="" />
            </Link>
            <NavbarMenu />
            <NavbarRight />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
