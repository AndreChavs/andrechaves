import React from 'react'
import Container from '../Container'
import styles from '@/styles/modules/Footer.module.css'
import { Grid04 } from '../Grids'
import { Button } from 'primereact/button'
import { LogoSvg } from '../../Logo'
import Link from 'next/link'

const Footer = () => {

  const links: {text: string, rota: string}[] = [
    {text: 'Home', rota: '/'},
    {text: 'Serviços', rota: '/servicos'},
    {text: 'Cursos', rota: '/cursos'},    
    {text: 'Suporte', rota: '/suporte'},    
    {text: 'Blog', rota: '/posts'},
  ]
  const services = [
    {text: 'Criação de sites', rota: '/servicos/sites'},
    {text: 'Landing Pages', rota: '/servicos/sites'},
    {text: 'Desenvolvimento web/mobile', rota: '/servicos/apps'},
    {text: 'Automação de Marketing digital', rota: '/servicos/automacao-mkt'},
  ]

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
        <Button label="Fale com o Especialista" icon="pi pi-whatsapp" className={styles.btn}/>
        <Container className={styles.fContainer}>
          <Grid04>
            <LogoSvg />
          </Grid04>
          <Grid04>
            <h3>ACTECH</h3>
            <address>Endereço: Rua wilson dias da fonseca, 561 - centro <br /> <strong>Santarém - PA</strong></address>
          </Grid04>
          <Grid04 style={{display:"flex", justifyContent:"space-between"}}>
            <ul style={{textAlign:"left"}}>
              <h4>Serviços</h4>
              {services.map((item) => {
                return (
                  <Link href={item.rota} key={item.text} legacyBehavior>
                    <li><a style={{fontSize:"12px"}}>{item.text}</a></li>
                  </Link>
                )
              })}
            </ul>
            <ul style={{textAlign:"right"}}>
              <h4>Menu</h4>
              {links.map((link) => {
                return (
                  <Link href={link.rota} key={link.text} legacyBehavior>
                    <li>
                      <a>{link.text}</a>
                    </li>
                  </Link>
                )
              })}
            </ul>
          </Grid04>
        </Container>
        <div className={styles.containerIcons}>
          <h3>Siga-me nas Redes Sociais</h3>
          <p>Fique por dentro das nossas últimas novidades e dicas seguindo-me nas redes sociais.</p>
          <div className={styles.icons}>
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
        </div>
      </footer>
      <div className={styles.copy}>© Copyright ACTECH - Todos os direitos reservados - 2024</div>
    </>
  )
}

export default Footer