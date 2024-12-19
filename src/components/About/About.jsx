import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./About.module.css"


export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>
                About
            </h2>
            <div className={styles.content}>
                <img src={getImageUrl("about/Hero2.png")} alt="About Image"
                    className={styles.aboutImage}></img>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon" ></img>
                        <div className={styles.aboutItemText}>
                            <h3>
                                Frontend Developer
                            </h3>
                            <p>A skilled frontend developer with expertise in building dynamic applications using Flutter, HTML, and CSS.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon"></img>
                        <div className={styles.aboutItemText}>
                            <h3>
                                Backend Developer
                            </h3>
                            <p>As a passionate and skilled backend developer,I bring extensive experience in C, C++, Java, and SQL to the table. </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="UI Icon"></img>
                        <div className={styles.aboutItemText}>
                            <h3>
                                UI Designer
                            </h3>
                            <p>A talented UI designer with experience in crafting intuitive and visually appealing interfaces for mobile applications and Java applets.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>

    )
}
