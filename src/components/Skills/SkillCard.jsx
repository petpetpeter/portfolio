import React from "react";

import styles from "./SkillCard.module.css";
import { getImageUrl } from "../../utils";

export const SkillCard = ({
  skill: { title, imageSrc, tags},
}) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <ul className={styles.tags}>
        {tags.map((tag, id) => {
          return (
            <li key={id} className={styles.tag}>
              {tag}
            </li>
          );
        })}
      </ul>
    </div>
  );
};