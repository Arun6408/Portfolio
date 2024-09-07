import React from "react";
import styles from "./card.module.css";
import { getImageUrl } from "../../utils";

const ProductCard = ({
  key,
  project: { title, imageSrc, description, skills, demo, source},
}) => {
  return (
    <div key={key} className={styles.container}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={getImageUrl(`${imageSrc}`)} alt={`Image of ${title}`} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, index) => (
          <li key={index} className={styles.skill}>{skill}</li>
        ))}
      </ul>
      <div className={styles.links}>
        <a className={styles.link} href={demo}>Demo</a>
        <a className={styles.link} href={source}>Source</a>
      </div>
    </div>
  );
};

export default ProductCard;
