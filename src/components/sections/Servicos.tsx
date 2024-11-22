import React from 'react'
import styles from '@/styles/modules/Servicos.module.css'
import Container from '../layout/Container'
import img1 from '../../../public/service0.jpeg'
import img2 from '../../../public/consultoria.jpeg'
import img3 from '../../../public/service2.jpeg'
import img4 from '../../../public/pi-image.jpg'
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
      img:img3,
      titulo:"Sistemas Web e Aplicativos iOS/android",
      subTitulo:"Soluções Personalizadas para Suas Necessidades",
      descricao:"Criação de sistemas web e aplicativos móveis sob medida para melhorar a eficiência e a produtividade do seu negócio. Integrações perfeitas, funcionalidades robustas e experiências de usuário excepcionais.",
      link:"/servicos/aplicacoes"
    },
    {
      img:img2,
      titulo:"Consultoria em Desenvolvimento de Sistemas",
      subTitulo:"Transforme suas necessidades tecnológicas em soluções personalizadas",
      descricao:"criar soluções digitais sob medida para o seu negócio. Desde a análise detalhada de requisitos até a implementação de sistemas robustos, nosso foco é garantir que sua empresa utilize as tecnologias mais avançadas e eficientes para alcançar resultados duradouros.",
      link:"/servicos/sites"
    },
    {
      img:img4,
      titulo:"Consultoria e Elaboração de Contratos de Licenciamento",
      subTitulo:"Garanta a proteção legal do seu software",
      descricao:"ajudo você a escolher o modelo de licença ideal (exclusivo, open-source, comercial) e a formalizar acordos claros, equilibrados e juridicamente seguros. Com uma estratégia de licenciamento bem definida, você maximiza a utilização de sua propriedade intelectual, evitando riscos e garantindo que seus direitos sejam respeitados.",
      link:"/servicos/automacoes"
    },
  ]

 
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>O que fazemos ?</h1>
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