import React from 'react'
import Image from 'next/image'
import styles from '@/styles/modules/Principal.module.css'
import Container from '../layout/Container'
import { Grid06 } from '../layout/Grids'
import Typed from 'typed.js'
import Link from 'next/link'

const Principal = () => {
  const el = React.useRef(null);
  React.useEffect(() => {
    const typing = new Typed(el.current, {
      strings:["Analyst and Developer", "FullStack Web Developer", "Freelancer"],
      typeSpeed: 75,      
      loop: true
    })

    return () => typing.destroy();
  },[])
  return (
    <section className={styles.sectionPrincipal}>
      <Container className={styles.containerWrap}>
        <Grid06 className={styles.gridText}>
          <div>            
            <p className={styles.txt}>Hello, it&#8217;s me</p>
            <h1 className={styles.txtNome}>André Chaves</h1>
            <p className={styles.txtAnimation}>And i&#8217;m a <span ref={el} /></p>            
            <p className={styles.txtParagraph}>
            Hello and welcome to my digital world, where the art of programming meets creativity and functionality. I&#8217;m a Fullstack Web Analyst and Developer passionate about turning ideas into virtual reality through code. My journey in this vast universe of the web is marked by the constant search for excellence and innovation.  
            </p>            
            <div className={styles.containerIcons}>
              <div className={styles.icons}>
                <Link href={"https://www.linkedin.com/in/andr%C3%A9-chaves-a9a69b1a7/"} legacyBehavior>
                  <a target={"_blank"}><i className="fa-brands fa-linkedin-in"></i></a>
                </Link>                
              </div>
              <div className={styles.icons}>
                <i className="fa-brands fa-instagram"></i>
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
        <Grid06 className={styles.gridImage}>
          <Image src='/Foto.png' width={409}
            height={451}
            alt="my picture"
          />
        </Grid06>        
      </Container>      
    </section>
  )
}

export default Principal