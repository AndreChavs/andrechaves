import React from 'react'
import Container from '../Container'
import styles from '@/styles/modules/Footer.module.css'
import { Logo } from '../header/Navbar'
import { Grid03, Grid04 } from '../Grids'
import { Button } from 'primereact/button'
import Image from 'next/image'
import { LogoSvg } from '../../Logo'
import Link from 'next/link'

const Footer = () => {

  const icons = [
    {
      href:'https://www.linkedin.com/in/andr%C3%A9-chaves-a9a69b1a7/',
      icon:'fa-brands fa-linkedin-in'
    },
    {
      href:'https://www.instagram.com/andrezchaves/',
      icon:'fa-brands fa-instagram'
    },
    {
      href:'https://wa.me/5593984394640',
      icon:'fa-brands fa-whatsapp'
    },
    {
      href:'https://github.com/AndreChavs',
      icon:'fa-brands fa-github'
    }
  ]

  return (
    <>
      <footer className={styles.footer}>
        <h1>Vamos Impulsionar Seu Negócio!</h1>
        <p>Entre em contato para descobrir como minhas soluções podem transformar sua presença digital e aumentar seus resultados.</p>
        
        <Container className={styles.fContainer}>
          <Grid04>
            <LogoSvg />
          </Grid04>
          <Grid04>
            <h3>ACTECH</h3>
            <address>Endereço: Rua wilson dias da fonseca, 561 - centro</address>
          </Grid04>
          <Grid04>
            <h3>Sobre</h3>
          </Grid04>
        </Container>
        <div className={styles.containerIcons}>
          {icons.map((icon) => {
            return (
              <div className={styles.icon} key={icon.icon}>
                <Link href={icon.href} legacyBehavior>
                  <a target={"_blank"}>
                    <i className={icon.icon}></i>
                  </a>
                </Link>
              </div>
            )
          })}
        </div>
      </footer>
      <div className={styles.copy}>© Copyright ACTECH - Todos os direitos reservados - 2024</div>
    </>
  )
}

export default Footer