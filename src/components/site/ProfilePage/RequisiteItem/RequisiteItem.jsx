import React from 'react';
import styles from './RequisiteItem.module.scss';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import clsx from 'clsx';
import RequisiteModal from '../RequisiteModal/RequisiteModal';
import { imgPath } from '../../../../utils/imgPath';
import { Dialog } from '@mui/material';
const RequisiteItem = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // const MySwal = withReactContent(Swal);
  // const showSwalWithLink = () => {

  //   // MySwal.fire({
  //   //   showCloseButton: true,
  //   //   showConfirmButton: false,
  //   //   html: (
  //   //     <div>
  //   //       <RequisiteModal {...props} />
  //   //     </div>
  //   //   ),
  //   //   closeButtonHtml: <div></div>,
  //   //   customClass: {
  //   //     closeButton: 'swap2-close-custom',
  //   //     popup: 'swap2-popup-custom',
  //   //     htmlContainer: 'swap2-container-custom',
  //   //   },
  //   // });
  // };
  return (
    <>
      <img src={imgPath(props.preview)} alt="" className={clsx(styles.icon)} onClick={handleClickOpen} />
      <Dialog
        open={open}
        onClose={handleClose}
        slotProps={{
          backdrop: {
            sx: {
              backgroundColor: 'rgba(0,0,0,0.15)',
            },
          },
        }}
        sx={{
          '& .MuiPaper-root': {
            width: '100%',
            maxWidth: '500px',
          },
        }}>
        <RequisiteModal {...props} onClose={handleClose} />
      </Dialog>
    </>
  );
};

export default RequisiteItem;
