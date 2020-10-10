import React from 'react';
import SignIn from '../../components/SignIn/SignIn';

import styles from './SignInAndSignUpPage.module.css';

const SignInAndSignUpPage = () => {
  return (
    <div className={styles.container}>
      <SignIn />
    </div>
  );
};

export default SignInAndSignUpPage;
