import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt=""
          className={styles.aboutImg}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              className={styles.aboutItemImg}
              src={getImageUrl("about/cursorIcon.png")}
              alt="cursorPng"
            />
            <div className={styles.aboutItemcontainer}>
              <h3>FrontEnd Developer</h3>
              <p>
                Skilled in creating intuitive and responsive user interfaces,
                using HTML, CSS, JavaScript, and modern frameworks to deliver
                seamless user experiences
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              className={styles.aboutItemImg}
              src={getImageUrl("about/serverIcon.png")}
              alt="severPng"
            />
            <div className={styles.aboutItemcontainer}>
              <h3>Backend Developer</h3>
              <p>
                Skilled Backend Developer with a strong focus on building
                scalable APIs and managing databases. Successfully completed
                several projects, ensuring secure, efficient server-side
                architectures integrated with frontend systems.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              className={styles.aboutItemImg}
              src={getImageUrl("about/uiIcon.png")}
              alt="uiPng"
            />
            <div className={styles.aboutItemcontainer}>
              <h3>DSA Enthusiast</h3>
              <p>
                Strong problem-solving skills with a deep understanding of data
                structures and algorithms. Solved 300+ problems on LeetCode,
                continually improving coding efficiency and logic building.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
