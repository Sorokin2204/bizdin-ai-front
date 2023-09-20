import React, { useEffect } from 'react';
import styles from './SupportPage.module.scss';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../../../components/site/Breadcrumbs/Breadcrumbs';
import { useDispatch } from 'react-redux';
import { getSupportList } from '../../../redux/actions/support/getSupportList';
import { useSelector } from 'react-redux';
const SupportPage = () => {
  const {
    getSupportList: { data: supportData },
  } = useSelector((state) => state.support);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSupportList());
  }, []);

  return (
    <>
      <Breadcrumbs list={[{ name: 'Поддержка', slug: '/support' }]} />
      <div class="container">
        <div className={clsx(styles.wrap)}>
          <div className={clsx(styles.title)}>Поддержка</div>
          <div className={clsx(styles.block)}>
            <div className={clsx(styles.text)}>Здесь можно найти частые вопросы и ответы на них. Если вам нужна личная поддержка от админа, напишите в Live-чат.</div>
          </div>
          <div className={clsx(styles.subtitle)}>Частые вопросы и ответы на них</div>
          <div className={clsx(styles.list)}>
            {supportData?.map((item) => (
              <Link to={`/support/${item?.slug}`} className={clsx(styles.item)}>
                {item?.name}
              </Link>
            ))}
          </div>
          <div className={clsx(styles.coop)}>По вопросам сотрудничества netdonatov@gmail.com</div>
        </div>
      </div>
    </>
  );
};

export default SupportPage;
