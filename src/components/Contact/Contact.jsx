import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Contact.module.css"
export const Contact = () => {
  return <footer id="contact" className={styles.container}>
    <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out</p>
    </div>
    <ul className={styles.links}>
        <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon">
            </img>
            <a href="mailto:darius_vlad04@yahoo.com">darius_vlad04@yahoo.com</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn Icon">
            </img>
            <a href="https://www.linkedin.com/in/darius-vlad-5150272a7/">linkedin.com/in/darius-vlad-5150272a7/</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub Icon">
            </img>
            <a href="https://github.com/darius-vlad">github.com/darius-vlad</a>
        </li>
    </ul>
  </footer>
}
