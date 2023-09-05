import React from 'react';
import styles from './Avatar.module.scss';
import clsx from 'clsx';
const Avatar = ({ children, authType, color, lg, sm }) => {
  const getColor = () => {
    switch (color) {
      case 'muted':
        return styles.muted;
      case 'red':
        return styles.red;
      case 'yellow':
        return styles.yellow;
      case 'dblue':
        return styles.dblue;
      case 'pink':
        return styles.pink;
      case 'green':
        return styles.green;
      case 'mint':
        return styles.mint;
      case 'black':
        return styles.black;
      case 'olive':
        return styles.olive;
      case 'pumpkin':
        return styles.pumpkin;
      case 'onyx':
        return styles.onyx;
    }
  };
  const getAuth = () => {
    switch (authType) {
      case 'google':
        return (
          <div className={clsx(styles.auth, styles.authGoogle)}>
            <img src="../img/google.svg" />
          </div>
        );

        break;

      default:
        break;
    }
  };
  return (
    <div className={clsx(styles.profile, getColor(), lg && styles.big, sm && styles.small)}>
      {children} {getAuth()}
    </div>
  );
};

export default Avatar;
