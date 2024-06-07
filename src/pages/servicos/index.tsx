import React from 'react'
import styles from '@/styles/modules/Servicos.module.css'
import Container from '@/components/layout/Container'
import Footer from '@/components/layout/footer/Footer'
import { Grid06 } from '@/components/layout/Grids'
import Servicos from '@/components/sections/Servicos'
import Head from 'next/head'
import { Button } from 'primereact/button'
import Image from 'next/image'
import Precos from '@/components/sections/Precos'
import NewsLetterForm from '@/components/forms/NewsLetterForm'
// import img1 from '../../../public/service0.jpeg'
// import img2 from '../../../public/service1.jpeg'
// import img3 from '../../../public/service2.jpeg'
// import img4 from '../../../public/service3.jpeg'


// const dataService = [
//   {
//     img:img1,
//     titulo:"Criação de Sites",
//     subTitulo:"Desenvolva Sua Presença Online",
//     descricao:"Projetos de sites personalizados, responsivos e otimizados para SEO. Garanto que seu site seja visualmente atraente, fácil de navegar e alinhado com a identidade da sua marca."
//   },
//   {
//     img:img2,
//     titulo:"Landing Pages",
//     subTitulo:"Converta Visitantes em Clientes",
//     descricao:"Desenvolvimento de landing pages eficazes que capturam leads e aumentam suas taxas de conversão. Designs atraentes e estratégias de conteúdo para maximizar o impacto das suas campanhas de marketing."
//   },
//   {
//     img:img3,
//     titulo:"Sistemas Web e Mobile Apps",
//     subTitulo:"Soluções Personalizadas para Suas Necessidades",
//     descricao:"Criação de sistemas web e aplicativos móveis sob medida para melhorar a eficiência e a produtividade do seu negócio. Integrações perfeitas, funcionalidades robustas e experiências de usuário excepcionais."
//   },
//   {
//     img:img4,
//     titulo:"Automação de Marketing Digital",
//     subTitulo:"Automatize e Escale Seu Marketing",
//     descricao:"Implementação de estratégias de automação para otimizar suas campanhas de marketing digital. Economize tempo, aumente o engajamento e converta mais leads com fluxos de trabalho automatizados e personalizados."
//   },
// ]

const index = () => {
  return (
    <>
      <Head>
        <title>ACTech - Serviços</title>        
        <meta property="og:title" content="ACTech - Serviços" />
        <meta name="description" content="ACTech - Serviços de automação em marketing digital e Desenvolvimento de sistemas web e mobile app" />
        <meta property="og:description" content="ACTech - Serviços de automação em marketing digital e Desenvolvimento de sistemas web e mobile app" />
        <meta name="keywords" content="Sistemas, automação, sites , landingpages" />
        <meta property="og:keywords" content="Sistemas, automação, sites , landingpages" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 
      <Servicos />
      <section className={styles.calltoaction}>
        <Container className={styles.containerSobre}>
          <Grid06>
            <h2>Vamos Conversar!</h2>
            <p>Estou aqui para ajudar você a alcançar seus objetivos digitais. Entre em contato comigo para agendar uma consulta gratuita e descobrir como nossas soluções podem transformar seu negócio.</p>
            <Button label="Agende uma Consulta" icon="pi pi-whatsapp" className={styles.btn}/>
          </Grid06>
          <Grid06>
            <Image src={'/calltoaction.jpeg'} width={300} height={300} alt='serviço de consultoria' />
          </Grid06>
        </Container>
      </section>
      <NewsLetterForm />
      <Precos />
      <Footer />
    </>
  )
}

export default index