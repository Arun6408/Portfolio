import React from 'react'
import styles from './projects.module.css'
import projects from '../../data/projects.json'
import { getImageUrl } from '../../utils'
import ProductCard from './ProductCard'

const Projects = () => {
  return (
    <section className={styles.container} id='projects'>
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.projects}>
            {projects.map((project, index) => (
                <ProductCard key={index} project={project} />
            )
            )}
        </div>
    </section>
  )
}

export default Projects