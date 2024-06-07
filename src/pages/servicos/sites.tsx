import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Container from '@/components/layout/Container'
import { Grid06 } from '@/components/layout/Grids'
import CardProject from '@/components/Cards/CardProject'
import Footer from '@/components/layout/footer/Footer'
import { Button } from 'primereact/button'
import styles from '@/styles/modules/Servicos.module.css'
import NewsLetterForm from '@/components/forms/NewsLetterForm'

const siteDetails = [
  {
    titulo:"Funcionalidades Sob Medida:",
    text:"Oferecemos funcionalidades sob medida para atender às necessidades específicas do seu negócio. Seja um e-commerce completo, um blog dinâmico, ou uma plataforma de serviços, estamos prontos para entregar soluções que impulsionam sua presença digital e aumentam sua eficiência operacional."
  },
  {
    titulo:"Design Responsivo:",
    text:"Todos os nossos sites são projetados para serem totalmente responsivos, garantindo uma experiência de navegação perfeita em dispositivos móveis, tablets e desktops. Nosso foco é garantir que seu site funcione perfeitamente em qualquer tela, proporcionando uma experiência de usuário consistente e agradável."
  },
  {
    titulo:"Otimização para SEO:",
    text:"Entendemos a importância da visibilidade online, por isso, todos os nossos sites são otimizados para SEO desde o início. Implementamos as melhores práticas de SEO on-page para garantir que seu site tenha uma base sólida para alcançar melhores posições nos motores de busca."
  }
]

const pageDatails = [
  {
    titulo:"Design Focado na Conversão:",
    text:"O design de nossas landing pages é centrado na conversão. Utilizamos técnicas comprovadas de design e copywriting para criar páginas que capturam a atenção do usuário e incentivam a ação desejada, seja para preencher um formulário, realizar uma compra ou solicitar mais informações."
  },
  {
    titulo:"Integração com Ferramentas de Marketing:",
    text:"Nossas landing pages são integradas com as principais ferramentas de marketing e CRM, permitindo que você gerencie seus leads de maneira eficiente e automatize processos de follow-up. Isso inclui integração com plataformas de email marketing, CRMs e sistemas de automação de marketing."
  }
]

const conteudos = [
  {
    title:"Experiência e Expertise:",
    text:"Com 4 anos de experiência no desenvolvimento de sites e landing pages, temos o conhecimento e a expertise necessários para entregar projetos de alta qualidade"
  },
  {
    title:"Soluções Personalizadas:",
    text:"Cada projeto é único e personalizado para atender às necessidades específicas do seu negócio."
  },
  {
    title:"Suporte Contínuo:",
    text:"Oferecemos suporte contínuo para garantir que seu site e landingPages estejam sempre atualizados e funcionando perfeitamente."
  }
]

const sites = () => {
  return (
    <>
      <Head>
        <title>ACTech - Criação de Sites e LandingPages</title>        
        <meta property="og:title" content="ACTech - Criação de Sites e LandingPages" />
        <meta name="description" content="ACTech - Sites e landingpages modernos, personalizados e de alta conversão" />
        <meta property="og:description" content="ACTech - Sites e landingpages modernos, personalizados e de alta conversão" />
        <meta name="keywords" content="Sites, landingPages" />
        <meta property="og:keywords" content="Sites , LandingPages" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className='section1'>
        <div className='sites-content'>
          <h1>Desenvolvimento de Sites e Landing Pages</h1>
          <p>Transforme sua Presença Online com Soluções Personalizadas</p>
        </div>
        <Container className='container-sites'>
          <Grid06>
            <div className='servicos-sites'>
              <h2 id='#sites'>Desenvolvimento de Sites</h2>
              <p className='sites-subTitle'>Criação de Sites Personalizados:</p>
              <p className='sites-text'>Desenvolvemos sites personalizados que refletem a identidade única da sua marca. Cada projeto é cuidadosamente planejado e executado para garantir que seu site não apenas se destaque visualmente, mas também ofereça uma experiência de usuário intuitiva e envolvente. Utilizamos as tecnologias mais recentes para criar sites responsivos e otimizados para SEO, garantindo que seu público encontre facilmente sua empresa online.</p>
              <Button label="Agende uma Consulta" icon="pi pi-whatsapp" className={styles.btn}/>
            </div>
          </Grid06>
          <Grid06>
            <Image src={'/site.jpeg'} width={400} height={400} alt="Desenvolvimento de Sites" />
          </Grid06>
        </Container>        
      </section>
      <section className='section2'>
        <Container className='container-sites'>
          {siteDetails.map((item) => (<CardProject 
            key={item.text}
            title={item.titulo} 
            text={item.text}
            tipeCard={true} 
          />))}
        </Container>
      </section>
      <section className='section3'>
        <Container className='container-sites'>
          <Grid06>
            <Image src='/page.jpeg' width={400} height={400} alt="criação de landingPage"/>
          </Grid06>
          <Grid06>
            <div className='servicos-sites'>
              <h2 id='#sites'>Desenvolvimento de Landing Pages</h2>
              <p className='sites-subTitle'>Captação Eficiente de Leads:</p>
              <p className='sites-text'>Criamos landing pages altamente eficazes que são projetadas para converter visitantes em leads qualificados. Nossas landing pages são construídas com foco em estratégias de marketing digital que maximizam a conversão, utilizando elementos de design atraentes e chamadas para ação claras e persuasivas.</p>
              <Button label="Agende uma Consulta" icon="pi pi-whatsapp" className={styles.btn}/>
            </div>
          </Grid06>
        </Container>
      </section>
      <section className='section4'>
        <Container className='container-sites'>
          {pageDatails.map((item) => (<CardProject
            key={item.titulo} 
            title={item.titulo} 
            text={item.text}
            tipeCard={true} 
          />))}
        </Container>
      </section>
      <section style={{padding:"4.5rem 0", background:"#f2f2f2"}}>
        <h2 style={{textAlign:"center", padding:"1rem 0", color:"var(--primary)"}}>Por Que Escolher Nossos Serviços?</h2>
        <Container style={{flexWrap:"wrap"}}>
          {conteudos.map((item) => <CardProject key={item.text} title={item.title} text={item.text} tipeCard={false}/>)}
        </Container>
      </section>
      <NewsLetterForm />
      <Footer />
    </>
  )
}

export default sites