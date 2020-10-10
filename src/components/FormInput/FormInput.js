import React from 'react';

import styles from './FormInput.module.css';

const FormInput = ({ type, label, name, value, handleChange }) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <input
        className={styles.input}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default FormInput;
