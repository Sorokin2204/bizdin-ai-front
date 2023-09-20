import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AdminTableList from '../../../components/admin/AdminTableList/AdminTableList';
import { apiUrl } from '../../../utils/apiUrl';
import styles from './AdminCommentList.module.scss';
import { useDispatch } from 'react-redux';
import { getBannerList } from '../../../redux/actions/banner/getBannerList';
import { useSelector } from 'react-redux';

import AdminCommentTable from '../../../components/admin/AdminCommentTable/AdminCommentTable';
import { getCommentListAdmin } from '../../../redux/actions/comment/getCommentListAdmin';
import ReviewItem from '../../../components/site/ReviewsPage/ReviewItem/ReviewItem';
import ReviewItemAdmin from '../../../components/site/ReviewsPage/ReviewItemAdmin/ReviewItemAdmin';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import Loading from '../../../components/admin/Loading/Loading';
import { resetUpdateComment, setEditCommentId } from '../../../redux/slices/comment.slice';
import InfoAlert from '../../../components/admin/InfoAlert/InfoAlert';
const AdminCommentList = () => {
  const {
    getCommentListAdmin: { data: commentList, loading },
    updateComment: { data: updateCommentData, loading: updateCommentLoading },
  } = useSelector((state) => state.comment);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCommentListAdmin());
  }, []);
  const [filter, setFilter] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  useEffect(() => {
    if (updateCommentData) {
      setShowAlert(true);
      dispatch(resetUpdateComment());
      dispatch(setEditCommentId(null));
      dispatch(getCommentListAdmin());
      setTimeout(() => {
        setShowAlert(false);
      }, 500);
    }
  }, [updateCommentData]);

  return (
    <div>
      {' '}
      <FormControl sx={{ mb: '16px' }}>
        <RadioGroup
          row
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
          }}>
          <FormControlLabel value="" control={<Radio />} label="Все" />
          <FormControlLabel value="approve" control={<Radio />} label="Одобреные" />
          <FormControlLabel value="not-approve" control={<Radio />} label="Не одобреные" />
        </RadioGroup>
      </FormControl>
      {commentList?.map((comment) => {
        if (filter) {
          if (filter == 'approve' && comment.moderate) {
            return <ReviewItemAdmin {...comment} />;
          }
          if (filter == 'not-approve' && !comment.moderate) {
            return <ReviewItemAdmin {...comment} />;
          }
        } else {
          return <ReviewItemAdmin {...comment} />;
        }
      })}
      {updateCommentLoading && <Loading />}
      <InfoAlert show={showAlert} text={'Отзыв обновлен'} />
    </div>
  );
};

export default AdminCommentList;
