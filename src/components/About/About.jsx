import React from "react";
import { getImageUrl } from "../../utils";
import style from "./About.module.css"

export const About = () => {
  return (
    <section className={style.container} id="about">
      <h2 className={style.title} >About</h2>
      <div className={style.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={style.aboutImage}
        />
        <ul className={style.aboutItems}>
          <li className={style.aboutItem} >
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={style.aboutItemText}>
              <h3>frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={style.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={style.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end system and APIs
                and optimized sites
              </p>
            </div>
          </li>
          <li className={style.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
            <div className={style.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                i have designed multiple landing pages and have created design
                systems as well 
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
