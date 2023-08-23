import React from 'react'
import styles from '@/styles/modules/Contato.module.css'
import ContactForm from '../forms/ContactForm'




const Contato = () => {
  return (
    <section className={styles.section} id="contato">
      <h1 className={styles.title}>Contato</h1>      
      <ContactForm />
    </section>
  )
}

export default Contato