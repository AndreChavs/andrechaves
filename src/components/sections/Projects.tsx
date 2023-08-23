import React from 'react'
import Container from '../layout/Container'
import styles from '@/styles/modules/Projects.module.css'
import CardProject from '../Cards/CardProject'


const Projects = () => {
  return (
    <section id='projects' className={styles.section}>
      <h1 className={styles.title}>Projects</h1>
      <Container className={styles.containerProjects}>
        <CardProject />
        <CardProject />
        <CardProject />
      </Container>
    </section>
  )
}

export default Projects