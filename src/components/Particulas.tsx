import { Button } from 'primereact/button'
import React from 'react'
import ParticlesBG from './ParticlesBG'
import styles from '@/styles/modules/Particulas.module.css'

const Particulas = () => {
  return (
    <section className={styles.principal}>
      <h1>Está pronto para transformar suas ideias em soluções tecnológicas eficazes ?</h1>
      <p>Está na hora de dar vida às suas ideias! Entre em contato e descubra como podemos ajudar!</p>
      <Button label="Agende uma Consulta" icon="pi pi-whatsapp" className={styles.btn}/>
      <ParticlesBG className={styles.particulas}/>
    </section> 
  )
}

export default Particulas