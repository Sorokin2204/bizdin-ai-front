import React, { useEffect, useState } from 'react';
import Input from '../../../../components/site/Common/Input/Input';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import Button from '../../../../components/site/Common/Button/Button';

import styles from './CreateReviewBlock.module.scss';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { resetCreateComment } from '../../../../redux/slices/comment.slice';
import ErrorMessage from '../../Common/ErrorMessage/ErrorMessage';
const CreateReviewBlock = ({ feedbackForm, onSubmit }) => {
  const like = feedbackForm?.watch('like');
  const navigate = useNavigate();
  const {
    createComment: { data: createCommentData, error: createCommentError },
  } = useSelector((state) => state.comment);

  const dispatch = useDispatch();
  useEffect(() => {
    if (createCommentData) {
      navigate('/feedback/created');
      dispatch(resetCreateComment());
    }
  }, [createCommentData]);
  return (
    <>
      {' '}
      <div className={clsx(styles.block)}>
        <Input form={feedbackForm} slug="text" placeholder={'Ваш отзыв'} isTextarea rows={5} />
        <div className={clsx(styles.likeBlock)}>
          <div
            className={clsx(styles.like, !like && styles.notActive)}
            onClick={() => {
              feedbackForm.setValue('like', true);
            }}></div>
          <div
            className={clsx(styles.dislike, like && styles.notActive)}
            onClick={() => {
              feedbackForm.setValue('like', false);
            }}></div>
        </div>
        {createCommentError && <ErrorMessage text="Отзыв на этот заказ уже существует" />}
        <div className={clsx(styles.btn)} onClick={feedbackForm?.handleSubmit(onSubmit)}>
          <Button lg> Отправить</Button>
        </div>
      </div>
    </>
  );
};

export default CreateReviewBlock;
