import React, { useEffect, useRef, useState } from 'react';
import styles from './SideBar.module.scss';
import clsx from 'clsx';
import AnimateHeight from 'react-animate-height';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCollapseLeftSideBar, setShowUserModal, setTheme } from '../../../redux/slices/app.slice';
import { CSSTransition } from 'react-transition-group';
import { useSelector } from 'react-redux';
import { useMediaQuery } from '../../../utils/useMediaQuery';
export const dataMenu = [
  {
    icon: './img/dashboard.svg',
    label: 'Dashboard',
    mobileLabel: 'Dashboard',
    mobileOrder: 1,
    slug: '/dashboard',
  },
  {
    icon: './img/chat.svg',
    label: 'Chats',
    mobileLabel: 'Chats',
    mobileOrder: 3,
    slug: '/chats',
  },
  {
    icon: './img/file.svg',
    label: 'Files',
    mobileLabel: 'Files',
    mobileOrder: 2,
    slug: '/files',
  },
  {
    icon: './img/road-finish.svg',
    label: 'Brainstorming',
    mobileLabel: 'Brain',
    mobileOrder: 4,
    slug: '/brainstorming',
  },
  {
    icon: './img/table-setting.svg',
    label: 'Smart Tools',
    mobileLabel: 'Tools',
    mobileOrder: 5,
    slug: '/smart-tools',
  },
];
const SideBar = () => {
  const { pathname } = useLocation();
  const [height, setHeight] = useState(0);
  const dispatch = useDispatch();
  const nodeRef = useRef(null);

  const { collapseLeftSideBar, theme } = useSelector((state) => state.app);
  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [theme]);

  const dataChat = [
    { color: '#33363F', label: 'Hello world' },
    { color: '#EE786C', label: 'Top 10 countries in ...' },
    { color: '#158DF7', label: 'The birth rate in 20...' },
    { color: '#F3540F', label: 'What do you think ...' },
  ];

  const getIndexByPathName = (path) => {
    switch (path) {
      case '/dashboard':
        return 0;
      case '/chats':
        return 1;
      case '/files':
        return 2;
      case '/brainstorming':
        return 3;
      case '/smart-tools':
        return 4;

      default:
        break;
    }
  };

  return (
    <>
      <div className={clsx(styles.wrap, collapseLeftSideBar && styles.wrapCollapse)}>
        {' '}
        <div className={clsx(styles.head)}>
          <div className={clsx(styles.logo)}>
            <div className={clsx(styles.logoIcon)}></div>

            <div className={clsx(styles.logoLabel)}></div>
          </div>
          <div
            className={clsx(styles.collapse, collapseLeftSideBar && styles.collapseActive)}
            onClick={() => {
              dispatch(setCollapseLeftSideBar(!collapseLeftSideBar));
            }}></div>
        </div>
        <div className={clsx(styles.content)}>
          {' '}
          <div className={clsx(styles.theme, theme && styles.themeDark, collapseLeftSideBar && styles.themeCollapse)}>
            <div
              className={clsx(styles.themeItem)}
              onClick={() => {
                dispatch(setTheme(false));
              }}>
              <div className={clsx(styles.themeIcon)}></div>
              <div className={clsx(styles.themeLabel)}>Light</div>
            </div>
            <div
              className={clsx(styles.themeItem)}
              onClick={() => {
                dispatch(setTheme(true));
              }}>
              {' '}
              <div className={clsx(styles.themeIcon)}></div>
              <div className={clsx(styles.themeLabel)}>Dark</div>
            </div>
          </div>
          <div className={clsx(styles.menu)}>
            <div className={clsx(styles.menuActive)} style={{ top: `${56 * getIndexByPathName(pathname) + 1}px` }}></div>
            {dataMenu?.map((item, itemIndex) => (
              <Link to={item?.slug} className={clsx(styles.menuItem)}>
                <img src={item?.icon} alt="" />
                <div className={clsx(styles.menuLabel)}> {item?.label}</div>
              </Link>
            ))}
          </div>
          <div className={clsx(styles.chatHead, height && styles.chatHeadActive)} onClick={() => setHeight(height === 0 ? 'auto' : 0)}>
            Chats
          </div>
          <AnimateHeight duration={500} height={height}>
            <div className={clsx(styles.chats)}>
              {dataChat?.map((itemChat) => (
                <div className={clsx(styles.chatItem)}>
                  <div className={clsx(styles.chatColor)} style={{ backgroundColor: itemChat?.color }}></div>
                  <div className={clsx(styles.chatLabel)}> {itemChat?.label}</div>
                </div>
              ))}
            </div>
          </AnimateHeight>
        </div>
        <div className={clsx(styles.profile)}>
          <div className={clsx(styles.profileWrap)}>
            <img src="https://i.pravatar.cc/36" alt="" className={clsx(styles.avatar)} />
            <div ref={nodeRef} className={clsx(styles.name)}>
              Ulday Turganbayeva
            </div>
          </div>

          <div
            className={clsx(styles.setting)}
            onClick={() => {
              dispatch(setShowUserModal(true));
            }}></div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
