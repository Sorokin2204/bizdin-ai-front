import React, { useEffect, useState } from 'react';
import styles from './CreateReviewPage.module.scss';
import Input from '../../../components/site/Common/Input/Input';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import Button from '../../../components/site/Common/Button/Button';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createComment } from '../../../redux/actions/comment/createComment';
import { useSelector } from 'react-redux';
const CreateReviewPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const defaultValues = {
    like: true,
    text: '',
  };
  const {
    createComment: { data: createCommentData },
  } = useSelector((state) => state.comment);
  const feedbackForm = useForm({ defaultValues });
  const like = feedbackForm.watch('like');
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    const gameId = searchParams.get('good_id');
    dispatch(
      createComment({
        ...data,
        ...(gameId && { gameId }),
      }),
    );
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (createCommentData) {
      navigate('/feedback/created');
    }
  }, [createCommentData]);

  return (
    <>
      <div className={clsx(styles.wrap)}>
        <div className={clsx(styles.title)}>Оставить отзыв</div>
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
          <div className={clsx(styles.btn)} onClick={feedbackForm.handleSubmit(onSubmit)}>
            <Button lg> Отправить</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateReviewPage;
