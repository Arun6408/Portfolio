import React from 'react'
import styles from './hero.module.css';
import { getImageUrl } from '../../utils';

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title} >Hi, I am Arun Kumar</h1>
            <p className={styles.description}>Full Stack Developer with 2 years of experience in front-end and back-end development. Proficient in data structures & algorithms with strong problem-solving skills</p>
            <a className={styles.contactBtn} href="mailto:challaarunkumar007@gmail.com">Contact Me</a>
        </div>
        <img src={getImageUrl('hero/heroImage.png')} alt="HeroImg" className={styles.heroImg} />
        <div className={styles.blur1}></div>
        <div className={styles.blur2}></div>
    </section>
  )
}

export default Hero