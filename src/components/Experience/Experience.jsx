import React from "react";
import style from "./Experience.module.css"
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={style.container} id="experience">
      <h2 className={style.title} >Experience</h2>
      <div className={style.content}>
        <div className={style.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={style.skill}>
                <div className={style.skillImagecontainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={style.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={style.historyItem}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} LOGO`}
                />
                <div className={style.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate}, ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id)=>{
                       return <li key={id} className={style.Experience} >
                        {experience}
                       </li> 
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
