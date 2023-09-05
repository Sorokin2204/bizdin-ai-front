import React from 'react';
import styles from './WhereFind.module.scss';
import clsx from 'clsx';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const WhereFind = () => {
  const MySwal = withReactContent(Swal);
  const showSwalWithLink = () => {
    MySwal.fire({
      html: (
        <div>
          <img class="swal2-image swal2-image-uid-info" src="https://donatov.net/storage/images/donatov.net-16895505986797.webp" alt="" style={{ width: '100%', borderRadius: '0.375rem', margin: '1rem 0 0' }}></img>
        </div>
      ),
      confirmButtonText: 'Понятно',
      confirmButtonColor: '#d63384',
    });
  };
  return (
    <>
      <div className={clsx(styles.btn)} onClick={showSwalWithLink}>
        Где найти ?
      </div>
    </>
  );
};

export default WhereFind;
