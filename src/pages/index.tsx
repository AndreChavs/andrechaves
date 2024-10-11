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
import Integracoes from '@/components/sections/Integracoes';
import Precos from '@/components/sections/Precos';
import Particulas from '../components/Particulas';
import { loadStripe } from '@stripe/stripe-js';
import { Button } from 'primereact/button';
import { Elements, CardElement } from '@stripe/react-stripe-js';






export default function Home() {

  
  const conteudos = [    
    {
      title:"Soluções Personalizadas:",
      text:"Cada projeto é único e personalizado para atender às necessidades específicas do seu negócio."
    },
    {
      title:"Suporte 24/7 via Whatsapp:",
      text:"Suporte contínuo para garantir que seu site, landing pages e demais projetos estejam sempre atualizados e funcionando perfeitamente."
    },
    {
      title:"Monitoramento Contínuo dos Serviços",
      text:"Monitoramos continuamente os logs de acesso aos servidores para prevenção de ataques DOS e DDOS"
    },
    {
      title:"Design Responsivo",
      text:"Garantimos que seus sistemas sejam acessíveis e funcionem perfeitamente em qualquer dispositivo."
    },
    {
      title:"Integração com APIs",
      text:"Conectamos seus sistemas com diversas plataformas e serviços para maximizar a funcionalidade e eficiência."
    },
    {
      title:"Segurança e Confiabilidade",
      text:"Implementamos as melhores práticas de segurança para proteger seus dados e operações."
    },
    {
      title:"Experiência do Usuário (UX)",
      text:"Focamos em criar interfaces intuitivas e envolventes para garantir a melhor experiência ao usuário."
    },
    {
      title:"Performance e Escalabilidade",
      text:"Construímos aplicativos que não só atendem às suas necessidades atuais, mas que também podem crescer junto com seu negócio."
    },
    {
      title:"Atualizações e Manutenção",
      text:"Oferecemos suporte contínuo para garantir que seus aplicativos estejam sempre atualizados e funcionando perfeitamente."
    }
  ]


  
  return (
    <>
      <Head>
        <title>André Chaves</title>        
        <meta property="og:title" content="André Chaves" />
        <meta name="description" content="ACTech - Serviços de automação em marketing digital e Desenvolvimento de sistemas web" />
        <meta property="og:description" content="ACTech - Serviços de automação em marketing digital e Desenvolvimento de sistemas web" />
        <meta name="keywords" content="Sistemas web, automação" />
        <meta property="og:keywords" content="Sistemas web, automação" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property='og:url' content='https://andrechaves.vercel.app/' />
        <meta property='og:type' content='' />
      </Head>      
      <Principal />      
      <Servicos />
      <Me />
      <Skills />
      <Integracoes />
      <section style={{padding:"4.5rem 0", background:"#f2f2f2"}}>
        <h2 style={{textAlign:"center", padding:"1rem 0", color:"var(--primary)"}}>Por Que Escolher Meus Serviços?</h2>
        <Container style={{flexWrap:"wrap"}}>
          {conteudos.map((item) => <CardProject key={item.title} title={item.title} text={item.text} tipeCard={false}/>)}
        </Container>
      </section>
      <Particulas />
      {/* <Precos />       */}
      <Testimonials />
      
      <Footer />      
    </>
  )
}
