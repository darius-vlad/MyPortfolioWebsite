import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css"

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>
                Hi, I'm Darius!
            </h1>
            <p className={styles.description}>Year 3 Student at Technical University of Cluj-Napoca. Full Stack Developer working on mobile applications , websites and java applications.</p>
            <a href='mailto:darius_vlad04@yahoo.com' className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/Hero2.png")} alt="Hero" className={styles.heroImg}>
        </img>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
}
