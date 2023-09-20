import React, { useEffect } from 'react';
import styles from './SupportSinglePage.module.scss';
import clsx from 'clsx';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { getSingleSupport } from '../../../redux/actions/support/getSingleSupport';
import { useSelector } from 'react-redux';
import { Interweave } from 'interweave';
import Breadcrumbs from '../../../components/site/Breadcrumbs/Breadcrumbs';
const SupportSinglePage = () => {
  let { slug } = useParams();
  const {
    getSingleSupport: { data, loading },
  } = useSelector((state) => state.support);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleSupport(slug));
  }, [slug]);

  return (
    <>
      {data && (
        <>
          <Breadcrumbs list={[{ name: 'Поддержка', path: '/support' }, { name: data?.name }]} />
          <div class="container">
            <div className={clsx(styles.wrap)}>
              <div className={clsx(styles.title)}>{data?.name}</div>
              <div className={clsx(styles.content)}>{<Interweave content={data?.desc} />}</div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SupportSinglePage;
