import React from 'react'
import styles from './skills.module.css'

import skills from '../../data/skills.json'
import InfiniteScroll from '../InfiniteScroll/InfiniteScroll';

const Skills = () => {
    var languages = [];
    var frameworks = [];
    var tools = [];
    skills.map((skill,id)=>{
        if(skill.type === 'Programming Language'){
            languages.push(skill);
        }
        else if(skill.type === 'Framework/Library'){
            frameworks.push(skill)
        }
        else{
            tools.push(skill);
        }
    });

  return (
    <section id='skills' className={styles.container}>
        <h2 className={styles.title}>Skills</h2>
        <div className={styles.scrollbars}>
            <InfiniteScroll items={languages} duration={30} startingSide={'left'} />
            <InfiniteScroll items={frameworks} duration={30} startingSide={'right'} />
            <InfiniteScroll items={tools} duration={30} startingSide={'left'} width={"50%"} />   
        </div>
    </section>
  )
}

export default Skills