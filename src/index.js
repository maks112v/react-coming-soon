import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './index.scss';

export default function ComingSoon({ image, bgColor, bgText, textColor }) {
  return (
    <section
      className={styles.fullpage}
      style={{
        backgroundImage: image ? `url(${image})` : '',
        backgroundColor: bgColor ? bgColor : '#fff',
        color: textColor ? textColor : '#000',
      }}
    >
      <div className={styles.content}>
        <h1>asdfasdf</h1>
      </div>
    </section>
  );
}
