import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Countdown from 'react-countdown-now';

import styles from './index.scss';

export default function ComingSoon({ image, bgColor, textColor, ...rest }) {
  console.log(rest);
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
        <div>
          <h1>Coming Soon</h1>
          <h3>Stay Tuned</h3>
          <Countdown
            date={Date.now() + 1000000000}
            renderer={props => (
              <div className={styles.countdown}>
                {props.days ? (
                  <div style={{ borderColor: textColor ? textColor : '#000' }}>
                    <h3>{props.days}</h3>
                    <p>Days</p>
                  </div>
                ) : null}
                <div style={{ borderColor: textColor ? textColor : '#000' }}>
                  <h3>{props.hours}</h3>
                  <p>Hours</p>
                </div>
                <div style={{ borderColor: textColor ? textColor : '#000' }}>
                  <h3>{props.minutes}</h3>
                  <p>Minutes</p>
                </div>
                <div style={{ borderColor: textColor ? textColor : '#000' }}>
                  <h3>{props.seconds}</h3>
                  <p>Seconds</p>
                </div>
              </div>
            )}
          />
        </div>
      </div>
    </section>
  );
}
