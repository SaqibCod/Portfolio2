import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
 
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}> Hi, I'm Saqib</h1>
            <p className={styles.description}>
            I'm a dedicated and enthusiastic Software Engineer with a strong passion for 
            building scalable, efficient, and user-friendly applications.
            </p>
            <a href="mailto:saqibc097@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/Profile image Park.jpg")} alt="Saqib" className={styles.heroImg} />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
  );
};