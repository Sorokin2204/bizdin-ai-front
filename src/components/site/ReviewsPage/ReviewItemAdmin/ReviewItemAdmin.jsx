import React from 'react';
import styles from './ReviewItemAdmin.module.scss';
import Avatar from '../../Common/Avatar/Avatar';
import clsx from 'clsx';
import moment from 'moment';
import 'moment/locale/ru';
import { imgPath } from '../../../../utils/imgPath';
import { Box, Button } from '@mui/material';
import Input from '../../Common/Input/Input';
import { useForm } from 'react-hook-form';
import InputCustom from '../../../admin/InputCustom/InputCustom';
import { useDispatch } from 'react-redux';
import { setEditCommentId } from '../../../../redux/slices/comment.slice';
import { useSelector } from 'react-redux';
import { CheckCircle, CloseOutlined, CloseRounded, HighlightOff } from '@mui/icons-material';
import { updateComment } from '../../../../redux/actions/comment/updateComment';
moment.locale('ru');
const ReviewItemAdmin = ({ moderate, id, user, text, createdAt, order, answer, like }) => {
  const reviewForm = useForm({
    defaultValues: {
      moderate: false,
      answer: answer || '',
    },
  });
  const dispatch = useDispatch();
  const { editCommentId } = useSelector((state) => state.comment);
  const onSubmit = (data) => {
    dispatch(updateComment({ commentId: id, answer: data.answer, moderate: data.moderate }));
  };
  return (
    <>
      <div className={clsx(styles.item, !like && styles.itemDislike)}>
        <div className={clsx(styles.head)}>
          <div className={clsx(styles.left)}>
            <Avatar color={user.color} sm>
              {user?.name?.slice(0, 2)}
            </Avatar>
            <div className={clsx(styles.user)}>{user?.name}</div>
          </div>
          <div className={clsx(styles.date)}>{moment(createdAt).format('DD MMMM YYYY г. в HH:mm')}</div>
        </div>
        <div className={clsx(styles.content)}>
          <div className={clsx(styles.like)}></div>
          <div className={clsx(styles.text)}>{text}</div>
        </div>
        {order?.game && (
          <div className={clsx(styles.game)}>
            <img src={imgPath(order?.game?.preview)} alt="" className={clsx(styles.gameIcon)} />
            <div className={clsx(styles.gameName)}>{order?.game?.name}</div>
          </div>
        )}

        {answer && editCommentId !== id && (
          <div className={clsx(styles.answer)}>
            <div className={clsx(styles.answerTitle)}>Ответ</div>
            <div className={clsx(styles.answerText)}>{answer}</div>
          </div>
        )}
        {editCommentId == id && (
          <Box sx={{ mt: '16px' }}>
            <Input isTextarea placeholder={'Ответ'} slug="answer" form={reviewForm} rules={{ required: false }} />
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              {' '}
              <InputCustom required={false} isCheckbox name={'moderate'} form={reviewForm} label={'Одобрить'} />{' '}
              <Box>
                <Button
                  variant="contained"
                  color="error"
                  sx={{ width: 'min-content', mr: '8px' }}
                  onClick={() => {
                    dispatch(setEditCommentId(null));
                  }}>
                  Отмена
                </Button>
                <Button variant="contained" sx={{ width: 'min-content', ml: 'auto' }} onClick={reviewForm.handleSubmit(onSubmit)}>
                  Сохранить
                </Button>
              </Box>
            </Box>
          </Box>
        )}
        {editCommentId !== id && (
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: '16px' }}>
            {moderate ? (
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'success.light', color: '#fff', padding: '6px 10px', borderRadius: '8px' }}>
                <CheckCircle sx={{ mr: '4px' }} />
                Одобрен
              </Box>
            ) : (
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'error.light', color: '#fff', padding: '6px 10px', borderRadius: '8px' }}>
                <HighlightOff sx={{ mr: '4px' }} />
                Не одобрен
              </Box>
            )}

            <Button
              variant="contained"
              sx={{ width: 'min-content', ml: 'auto' }}
              onClick={() => {
                dispatch(setEditCommentId(id));
              }}>
              Редактировать
            </Button>
          </Box>
        )}
      </div>
    </>
  );
};

export default ReviewItemAdmin;
