import React from 'react';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import CustomButton from '../CustomButton/CustomButton';
import FormInput from '../FormInput/FormInput';

import styles from './SignIn.module.css';

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className={styles.container}>
        <h2>I already have an account</h2>
        <span className={styles.subheading}>
          Sign in with your email and password
        </span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="Email"
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
          />
          <FormInput
            label="Password"
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
          />
          <div className={styles.buttonContainer}>
            <CustomButton text="Sign in" type="normal" />
            <CustomButton
              text="Sign in with"
              type="branded"
              icon="https://img.icons8.com/color/48/000000/google-logo.png"
              onClick={signInWithGoogle}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
