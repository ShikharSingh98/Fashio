import React from 'react';
import styles from './CustomButton.module.css';

const CustomButton = ({ text, type, icon, onClick }) => {
  return (
    <button
      className={type === 'branded' ? styles.branded : styles.normal}
      onClick={onClick}
    >
      {text}
      {icon ? (
        <img className={styles.icon} src={icon} alt="signin icon" />
      ) : null}
    </button>
  );
};

export default CustomButton;
