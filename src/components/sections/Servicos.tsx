import React from 'react'
import styles from '@/styles/modules/Servicos.module.css'
import Container from '../layout/Container'
import img1 from '../../../public/service0.jpeg'
import img2 from '../../../public/service1.jpeg'
import img3 from '../../../public/service2.jpeg'
// import img4 from '../../../public/service3.jpeg'
import { Grid03 } from '../layout/Grids';
import CardEffect from '../Cards/CardEffect';

const Servicos = () => {

  const dataService = [
    {
      img:img1,
      titulo:"Criação de Sites",
      subTitulo:"Desenvolva Sua Presença Online",
      descricao:"Projetos de sites personalizados, responsivos e otimizados para SEO. Garanto que seu site seja visualmente atraente, fácil de navegar e alinhado com a identidade da sua marca.",
      link:"/servicos/sites"
    },
    {
      img:img2,
      titulo:"Landing Pages",
      subTitulo:"Converta Visitantes em Clientes",
      descricao:"Desenvolvimento de landing pages eficazes que capturam leads e aumentam suas taxas de conversão. Designs atraentes e estratégias de conteúdo para maximizar o impacto das suas campanhas de marketing.",
      link:"/servicos/sites"
    },
    {
      img:img3,
      titulo:"Sistemas Web e Aplicativos iOS/android",
      subTitulo:"Soluções Personalizadas para Suas Necessidades",
      descricao:"Criação de sistemas web e aplicativos móveis sob medida para melhorar a eficiência e a produtividade do seu negócio. Integrações perfeitas, funcionalidades robustas e experiências de usuário excepcionais.",
      link:"/servicos/aplicacoes"
    },
    // {
    //   img:img4,
    //   titulo:"Automação de Marketing Digital",
    //   subTitulo:"Automatize e Escale Seu Marketing",
    //   descricao:"Implementação de estratégias de automação para otimizar suas campanhas de marketing digital. Economize tempo, aumente o engajamento e converta mais leads com fluxos de trabalho automatizados e personalizados.",
    //   link:"/servicos/automacoes"
    // },
  ]

 
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Meus Serviços</h1>
      <Container className={styles.containerSobre}>
        {dataService.map((item) => {
          return (
            <Grid03 key={item.titulo}>
              <CardEffect 
                img={item.img}
                titulo={item.titulo}
                subTitulo={item.subTitulo}
                descricao={item.descricao}
                link={item.link}
              />
            </Grid03>
          )
        })}
      </Container>
    </section>
  )
}

export default Servicos