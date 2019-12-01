import React, { Component } from "react";
import PropTypes from "prop-types";

import Countdown from "react-countdown-now";

import styles from "./index.scss";

function illustrationResolver(name) {
  switch (name) {
    case "development":
      return "https://react-coming-soon.maksv.me/under-development.png";
    case "react":
      return "https://react-coming-soon.maksv.me/react.svg";
    case "git":
      return "https://react-coming-soon.maksv.me/git.svg";
    case "planning":
      return "https://react-coming-soon.maksv.me/planning.svg";
    case "web-development":
      return "https://react-coming-soon.maksv.me/web-development.svg";
    default:
      return name;
  }
}

export default function ComingSoon({
  image,
  bgColor,
  textColor,
  illustration,
  title,
  subtitle,
  date,
  children,
  ...rest
}) {
  console.log(rest);
  return (
    <section
      className={styles.fullpage}
      style={{
        backgroundImage: image ? `url(${image})` : "",
        backgroundColor: bgColor ? bgColor : "#fff",
        color: textColor ? textColor : "#000"
      }}
    >
      <div className={styles.content}>
        <div>
          <img src={illustrationResolver(illustration)} />
          <h1>{title ? title : "Coming Soon"}</h1>
          <p>{subtitle}</p>
          {children}
          {date ? (
            <Countdown
              date={date}
              renderer={props => (
                <div className={styles.countdown}>
                  {props.days ? (
                    <div
                      style={{ borderColor: textColor ? textColor : "#000" }}
                    >
                      <h3>{props.days}</h3>
                      <p>Days</p>
                    </div>
                  ) : null}
                  <div style={{ borderColor: textColor ? textColor : "#000" }}>
                    <h3>{props.hours}</h3>
                    <p>Hours</p>
                  </div>
                  <div style={{ borderColor: textColor ? textColor : "#000" }}>
                    <h3>{props.minutes}</h3>
                    <p>Minutes</p>
                  </div>
                  <div style={{ borderColor: textColor ? textColor : "#000" }}>
                    <h3>{props.seconds}</h3>
                    <p>Seconds</p>
                  </div>
                </div>
              )}
            />
          ) : null}
        </div>
      </div>
    </section>
  );
}
