import React from 'react'
import styles from '@/styles/modules/Principal.module.css'
import Container from '../layout/Container'
import { Grid06 } from '../layout/Grids'
import Link from 'next/link'
import Typed from 'typed.js'
import Spline from '@splinetool/react-spline'
import { matrixEffect } from '@/functions/matrixEffect'


const Principal = () => { 
  const [gridTActive, setGridTActive] = React.useState(styles.gridText)
  const [gridIActive, setGridIActive] = React.useState(styles.gridImage)
  
  const el = React.useRef(null); 
 

  React.useEffect(() => {         
    const drawEffectMatrix = matrixEffect()    

    async function timeMatrix() {
      const timePromise:Promise<{intervalId:NodeJS.Timer, timeOut:NodeJS.Timer}> = new Promise((resolve) => {
        const timeOut = setTimeout(() => {
          const intervalId = setInterval(drawEffectMatrix, 50)
          resolve({intervalId, timeOut})
        },200)
      })
      return timePromise
    }

    const time = setTimeout(() => {
      setGridTActive(styles.gridTextActive)
      setGridIActive(styles.gridImageActive)      
    },1000)

    const typing = new Typed(el.current, {
      strings: ["Analista de Sistemas", "Desenvolvedor de Sistemas", "Especialista em Automação de Marketing Digital"],
      typeSpeed: 50,
      loop: true
    });

    timeMatrix().then(({intervalId, timeOut}) => {
      return () => {
        clearTimeout(timeOut);
        clearInterval(intervalId);
      }
    })    

    return () => {
        typing.destroy();        
        clearTimeout(time)
    };
  }, []);



  return (<>
    <section className={styles.sectionPrincipal} onLoad={() => console.log('load')}>
      <canvas id="canvas" className={styles.canvas}></canvas>
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
                <div className={styles.icons}>
                  <Link href={"https://www.linkedin.com/in/andr%C3%A9-chaves-a9a69b1a7/"} legacyBehavior>
                    <a target={"_blank"}><i className="fa-brands fa-linkedin-in"></i></a>
                  </Link>                
                </div>
                <div className={styles.icons}>
                  <Link href={"https://www.instagram.com/dev.andrezchaves/"} legacyBehavior>
                    <a target={"_blank"}><i className="fa-brands fa-instagram"></i></a>
                  </Link>
                </div>
                <div className={styles.icons}>
                  <Link href={"https://wa.me/5593984394640"}  legacyBehavior>
                    <a target={"_blank"}><i className="fa-brands fa-whatsapp"></i></a>
                  </Link>
                </div>
                <div className={styles.icons}>
                  <Link href={"https://github.com/AndreChavs"} legacyBehavior>
                    <a target={"_blank"}><i className="fa-brands fa-github"></i></a>
                  </Link>
                </div>
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