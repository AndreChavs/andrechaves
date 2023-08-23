import React from 'react'
import styles from '@/styles/modules/Sobre.module.css'
import Container from '../layout/Container'

const Sobre = () => {
  return (
    <section id='about' className={styles.section}>
      <Container className={styles.containerSobre}>
        <h1 className={styles.title}>About <span>Me</span></h1>
        <p className={styles.text}>Sou analista e desenvolvedor web fullstack com experiência em JavaScript e Typescript, considero como uma das minhas principais qualidades, como profissional, a capacidade de aprendizado constante, a habilidade de trabalhar em equipe e a busca por soluções inovadoras para problemas complexos. Além disso, tenho experiência com frameworks populares como o Nextjs (FrontEnd-SSR) e Nestjs (BackEnd) que são essenciais para desenvolver aplicações web modernas e escaláveis. 
        </p>
      </Container>
    </section>
  )
}

export default Sobre