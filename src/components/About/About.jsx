import React from 'react'
import { getImageUrl } from '../../utils';
import styles from './About.module.css';

export const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>
            About</h2>
        <div className={styles.content}>
            <img src={getImageUrl('about/aboutImage.png')} 
            alt="Me sittiong with a laptop"
            className={styles.aboutImage}
            />
            <ul className={styles.aboutItems}>
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
            </ul>
        </div>
    
    </section>
  )
}
