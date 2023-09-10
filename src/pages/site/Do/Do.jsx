import React, { useEffect } from 'react';
import styles from './Do.module.scss';
import { useNavigate, useParams } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginEmail } from '../../../redux/actions/user/loginEmail';
import { useSelector } from 'react-redux';
import { resetLoginEmail } from '../../../redux/slices/user.slice';
const Do = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    loginEmail: { data: dataLogin },
  } = useSelector((state) => state.user);
  useEffect(() => {
    const email = searchParams.get('e');
    const token = searchParams.get('s');
    if (email && token) {
      dispatch(loginEmail({ e: email, s: token }));
    } else {
      navigate('/');
    }
  }, []);

  useEffect(() => {
    if (dataLogin?.token) {
      localStorage.setItem('auth-token', dataLogin.token);
      navigate('/');
      dispatch(resetLoginEmail());
    }
  }, [dataLogin]);

  return <></>;
};

export default Do;
