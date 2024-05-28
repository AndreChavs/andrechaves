import React from 'react'
import styles from '@/styles/modules/Servicos.module.css'
import Container from '../layout/Container'
import img1 from '../../../public/service0.png'
import img2 from '../../../public/service1.png'
import img3 from '../../../public/service2.png'
import img4 from '../../../public/service3.png'
import { Grid03, Grid06 } from '../layout/Grids';
import CardEffect from '../Cards/CardEffect';

const Servicos = () => {

  const dataService = [
    {
      img:img1,
      titulo:"Criação de Sites",
      subTitulo:"Desenvolva Sua Presença Online",
      descricao:"Projetos de sites personalizados, responsivos e otimizados para SEO. Garanto que seu site seja visualmente atraente, fácil de navegar e alinhado com a identidade da sua marca."
    },
    {
      img:img2,
      titulo:"Landing Pages",
      subTitulo:"Converta Visitantes em Clientes",
      descricao:"Desenvolvimento de landing pages eficazes que capturam leads e aumentam suas taxas de conversão. Designs atraentes e estratégias de conteúdo para maximizar o impacto das suas campanhas de marketing."
    },
    {
      img:img3,
      titulo:"Desenvolvimento de Sistemas Web e Mobile Apps",
      subTitulo:"Soluções Personalizadas para Suas Necessidades",
      descricao:"Criação de sistemas web e aplicativos móveis sob medida para melhorar a eficiência e a produtividade do seu negócio. Integrações perfeitas, funcionalidades robustas e experiências de usuário excepcionais."
    },
    {
      img:img4,
      titulo:"Automação de Marketing Digital",
      subTitulo:"Automatize e Escale Seu Marketing",
      descricao:"Implementação de estratégias de automação para otimizar suas campanhas de marketing digital. Economize tempo, aumente o engajamento e converta mais leads com fluxos de trabalho automatizados e personalizados."
    },
  ]

 
  return (
    <section id='servicos' className={styles.section}>
      <h1 className={styles.title}>Serviços</h1>
      <Container className={styles.containerSobre}>
        {dataService.map((item) => {
          return (
            <Grid03 key={item.titulo}>
              <CardEffect 
                img={item.img}
                titulo={item.titulo}
                subTitulo={item.subTitulo}
                descricao={item.descricao}
              />
            </Grid03>
          )
        })}
               
        
      </Container>
    </section>
  )
}

export default Servicos