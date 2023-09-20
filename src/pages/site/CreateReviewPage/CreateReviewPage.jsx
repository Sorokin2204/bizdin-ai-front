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
import Breadcrumbs from '../../../components/site/Breadcrumbs/Breadcrumbs';
import CreateReviewBlock from '../../../components/site/ReviewsPage/CreateReviewBlock/CreateReviewBlock';
const CreateReviewPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const defaultValues = {
    like: true,
    text: '',
  };
  const {
    createComment: { data: createCommentData },
  } = useSelector((state) => state.comment);

  const {
    authUser: { data: authData },
  } = useSelector((state) => state.user);
  const feedbackForm = useForm({ defaultValues });
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
      <Breadcrumbs list={[{ name: 'Отзывы', path: '/feedback' }, { name: 'Оставить отзыв' }]} />
      <div class="container">
        <div className={clsx(styles.wrap)}>
          <div className={clsx(styles.title)}>Оставить отзыв</div>
          {authData ? (
            <CreateReviewBlock feedbackForm={feedbackForm} onSubmit={onSubmit} />
          ) : (
            <>
              <div className={clsx(styles.signIn)}>
                <div className={clsx(styles.signInText)}>Войдите, чтобы оставить отзыв</div>
                <div className={clsx(styles.signInBtn)}>
                  {' '}
                  <Button
                    lg
                    onClick={() => {
                      navigate('/login');
                    }}>
                    Войти
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CreateReviewPage;
