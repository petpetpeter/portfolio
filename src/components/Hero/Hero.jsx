import React from 'react'

import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';
export const Hero = () => {
  return (
  <section className={styles.container}>

    <div className={styles.content}>
    <h1 className={styles.title}>Hi, I'm Peter</h1>
    <p className={styles.description}>My portfolio <strong></strong> for <strong></strong></p>
    <a href="mailto:chana.pol.peter@gmail.com" className={styles.contactBtn}>Contact Me</a>
    </div>

    <img src={getImageUrl('hero/heroImage.png')} alt="Hero" className={styles.heroImg}/>
    <div className={styles.topBlur}></div>
    {/* <div className={styles.bottomBlur}></div> */}
  </section>
  );
}




