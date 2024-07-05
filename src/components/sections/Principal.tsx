import React from 'react'
import dynamic from 'next/dynamic';
import styles from '@/styles/modules/Principal.module.css'
import Container from '../layout/Container'
import { Grid06 } from '../layout/Grids'
import Link from 'next/link'
import Typed from 'typed.js'
import CanvaMatrix from '../CanvaMatrix';
import Spline from '@splinetool/react-spline';
import Loading from '../Loading';

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

// const CanvaMatrix = dynamic(() => import('../CanvaMatrix'),{loading:({isLoading}) => <Loading loading={isLoading}/>, ssr:false})
// const Spline = dynamic(() => import('@splinetool/react-spline'), {loading:({isLoading}) => <Loading loading={isLoading}/>, ssr:false})

const Principal = () => { 
  const [gridTActive, setGridTActive] = React.useState(styles.gridText)
  const [gridIActive, setGridIActive] = React.useState(styles.gridImage)
  
  const el = React.useRef(null); 

  React.useEffect(() => {
    const time = setTimeout(() => {
      setGridTActive(styles.gridTextActive)
      setGridIActive(styles.gridImageActive)      
    },1500)

    const typing = new Typed(el.current, {
      strings: ["Analista de Sistemas", "Desenvolvedor de Sistemas", "Especialista em Automação de Marketing Digital"],
      typeSpeed: 50,
      loop: true
    });

    return () => {
        typing.destroy();        
        clearTimeout(time);        
    };
  }, []);



  return (<>
    <section className={styles.sectionPrincipal} > 
      <CanvaMatrix />
      <Container className={styles.containerWrap}>        
        <>
          <Grid06 className={gridTActive}>
            <div>
              <h1 className={styles.txtNome}>Olá, Sou André Chaves</h1>
              <p className={styles.txtAnimation}><span ref={el} /></p>            
              <p className={styles.txtParagraph}>
              Eu ajudo empresas a maximizar seu potencial online através da automação inteligente e soluções tecnológicas personalizadas. Com 4 anos de experiência na área de desenvolvimento de sistemas e marketing digital, minha missão é criar estratégias e ferramentas que impulsionem o crescimento, aumentem a eficiência e gerem resultados tangíveis.  
              </p>            
              <div className={styles.containerIcons}>
                {icons.map((icon, index) => {
                  return (
                    <div key={index} className={styles.icons}>
                      <Link href={icon.href} legacyBehavior>
                        <a target={"_blank"}><i className={icon.icon}></i></a>
                      </Link>                
                    </div>
                  )
                })}                
              </div>
            </div>
          </Grid06>
          <Grid06 className={gridIActive}>        
            <Spline 
              scene='https://prod.spline.design/0B18tVNKGpOur4PC/scene.splinecode'            
              className={styles.iframe}
            />        
          </Grid06>        
        </>     
      </Container>      
    </section>
  </>
  )
}

export default Principal