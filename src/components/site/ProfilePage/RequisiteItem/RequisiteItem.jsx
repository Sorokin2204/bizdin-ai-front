import React from 'react';
import styles from './RequisiteItem.module.scss';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import clsx from 'clsx';
import RequisiteModal from '../RequisiteModal/RequisiteModal';
const RequisiteItem = () => {
  const MySwal = withReactContent(Swal);
  const showSwalWithLink = () => {
    MySwal.fire({
      showCloseButton: true,
      showConfirmButton: false,
      html: (
        <div>
          {' '}
          <RequisiteModal />
        </div>
      ),
      closeButtonHtml: <div></div>,
      customClass: {
        closeButton: 'swap2-close-custom',
        popup: 'swap2-popup-custom',
        htmlContainer: 'swap2-container-custom',
      },
    });
  };
  return (
    <>
      <img src="../img/game-1.webp" alt="" className={clsx(styles.icon)} onClick={showSwalWithLink} />
    </>
  );
};

export default RequisiteItem;
