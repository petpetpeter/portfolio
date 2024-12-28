import React from 'react'

import styles from './Contact.module.css'
import { getImageUrl } from '../../utils'

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email" />
                <a href="mailto:chana.pol.peter@gmail.com">chana.pol.peter@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn" />
                <a href="https://www.linkedin.com/in/chanapol-p-043b2a143/">linkedin.com/chanapol-p</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="Github" />
                <a href="https://github.com/petpetpeter">https://github.com/petpetpeter</a>
            </li>
        </ul>
    </footer>
  )
}
