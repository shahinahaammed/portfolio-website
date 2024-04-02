import React from "react";
import { getImageUrl } from "../../utils";

import Styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={Styles.container}>
      <div className={Styles.content}>
        <h1 className={Styles.title}>Hi, I'm Shahin</h1>
        <p className={Styles.description}>
          I'm a full-stack developer with 1 years of experience using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:shahinahd3@gmail.com" className={Styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={Styles.heroImg}
      />
      <div className={Styles.topBlur} />
      <div className={Styles.bottomBlur} />
    </section>
  );
};
