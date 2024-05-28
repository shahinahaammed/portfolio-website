import React from "react";

import style from './Contact.module.css'
import { getImageUrl } from "../../utils";


export const Contact = () => {
  return (
    <footer id="contact" className={style.container}>
      <div className={style.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out</p>
      </div>
      <ul className={style.links}>
        <li className={style.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:shahinahd3@gmail.com">Shahinahd3@gmail.com</a>
        </li>
        <li className={style.link}>
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="linkedin icon" />
          <a href="https://www.linkedin.com/in/shahin-ahammed3/">linkedin.com/Shahin</a>
        </li>
        <li className={style.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="github icon" />
          <a href="https://github.com/shahinahaammed">Shahin Ahammed</a>
        </li>
      </ul>
    </footer>
  );
};
