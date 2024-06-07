import React from 'react';
import Servicos from '@/components/sections/Servicos'
import Head from 'next/head'
import Me from '@/components/sections/Me'
import Footer from '@/components/layout/footer/Footer'
import Principal from '@/components/sections/Principal';
import Testimonials from '@/components/sections/Testimonials';
import Skills from '@/components/sections/Skills';
import Container from '@/components/layout/Container';
import CardProject from '@/components/Cards/CardProject';
import NewsLetterForm from '@/components/forms/NewsLetterForm';



export default function Home() {
  
  const conteudos = [
    {
      title:"Experiência e Expertise:",
      text:"Com 4 anos de experiência no desenvolvimento de sites, landing pages, aplicações e automações tenho o conhecimento e a expertise necessários para entregar projetos de alta qualidade."
    },
    {
      title:"Soluções Personalizadas:",
      text:"Cada projeto é único e personalizado para atender às necessidades específicas do seu negócio."
    },
    {
      title:"Suporte Contínuo:",
      text:"Suporte contínuo para garantir que seu site, landing pages e demais projetos estejam sempre atualizados e funcionando perfeitamente."
    }
  ]
  
  return (
    <>
      <Head>
        <title>ACTech - Home</title>        
        <meta property="og:title" content="ACTech - Home" />
        <meta name="description" content="ACTech - Serviços de automação em marketing digital e Desenvolvimento de sistemas web e mobile app" />
        <meta property="og:description" content="ACTech - Serviços de automação em marketing digital e Desenvolvimento de sistemas web e mobile app" />
        <meta name="keywords" content="Sistemas, automação" />
        <meta property="og:keywords" content="Sistemas, automação" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>      
      <Principal />      
      <Servicos />
      <Me />
      <Skills />
      <Testimonials />
      <section style={{padding:"4.5rem 0", background:"#f2f2f2"}}>
        <h2 style={{textAlign:"center", padding:"1rem 0", color:"var(--primary)"}}>Por Que Escolher Nossos Serviços?</h2>
        <Container style={{flexWrap:"wrap"}}>
          {conteudos.map((item) => <CardProject key={item.title} title={item.title} text={item.text} tipeCard={false}/>)}
        </Container>
        <NewsLetterForm /> 
      </section>
      <Footer />
      
    </>
  )
}
