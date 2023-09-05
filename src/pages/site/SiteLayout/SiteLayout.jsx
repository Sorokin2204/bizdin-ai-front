import React from 'react';
import styles from './SiteLayout.module.scss';
import Navbar from '../../../components/site/Common/Navbar/Navbar';
import clsx from 'clsx';
import Footer from '../../../components/site/Common/Footer/Footer';
const SiteLayout = ({ children }) => {
  return (
    <div>
      <div className={clsx(styles.wrap)}>
        <Navbar />
        {children}
        <div className="container">
          {' '}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default SiteLayout;
