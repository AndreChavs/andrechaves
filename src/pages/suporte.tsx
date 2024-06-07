import React from 'react'
import Container from '@/components/layout/Container'
import { Grid06 } from '@/components/layout/Grids'
import Precos from '@/components/sections/Precos'

const suporte = () => {
  return (
    <>
      <section className='section1'>
        <h1 className='title'>Suporte Técnico Especializado <br></br> para Todas as Suas Necessidades</h1>
        <Container className='container-sites'>
          <Grid06>
            <h2>Nosso Compromisso com a Excelência em Suporte</h2>
            <p>Entendemos que a manutenção e o suporte contínuo são tão importantes quanto a criação e o desenvolvimento dos seus projetos digitais. Por isso, oferecemos um serviço de suporte técnico especializado para garantir que seu site, landing pages, automações de marketing e sistemas web/mobile estejam sempre funcionando perfeitamente.</p>
          </Grid06>
          <Grid06>
            
          </Grid06>
        </Container>
      </section>
      <Precos />
    </>
    )
  }

export default suporte