import React from 'react'

import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';
export const Hero = () => {
  return (
  <section className={styles.container}>

    <div className={styles.content}>
    <h1 className={styles.title}>Hi, I'm Peter </h1>
    <p className={styles.description}> Robotic Software Engineer specializing in AI-powered perception and web-based control interfaces. <strong></strong> <strong></strong></p>
    <a href="#contact" className={styles.contactBtn}>Contact Me</a>
    </div>

    <img src={getImageUrl('hero/me.jpeg')} alt="Hero" className={styles.heroImg}/>
    <div className={styles.topBlur}></div>
    {/* <div className={styles.bottomBlur}></div> */}
  </section>
  );
}




