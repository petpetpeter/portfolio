import React from 'react'
import { getImageUrl } from '../../utils';

import styles from './Skills.module.css';

import skills from '../../data/skills.json'
import { SkillCard } from "./SkillCard";

export const Skills = () => {
  return (
    <section className={styles.container} id="skills">
        <h2 className={styles.title}>
            Skills</h2>
        <div className={styles.content}>
            {/* <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl('about/cursorIcon.png')} alt="Icon"/>
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>Experienced in building responsive and user-friendly websites using modern technologies.</p>
                    </div>
                </li>
                <li  className={styles.aboutItem}>
                    <img src={getImageUrl('about/serverIcon.png')} alt="Icon"/>
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>Experienced in building RESTful APIs and working with databases.</p>
                    </div>
                </li>
                <li  className={styles.aboutItem}>
                    <img src={getImageUrl('about/serverIcon.png')} alt="Icon"/>
                    <div className={styles.aboutItemText}>
                        <h3>UI Designer</h3>
                        <p>Designing something.</p>
                    </div>
                </li>
            </ul> */}
            <div className={styles.skills}>
                {skills.map((skill, id) => {
                return <SkillCard key={id} skill={skill} />;
                })}
            </div>
        </div>
    
    </section>
  )
}
