import React from 'react'
import styles from '@/styles/modules/Principal.module.css'
import Container from '../layout/Container'
import { Grid06 } from '../layout/Grids'
import Typed from 'typed.js'
import Link from 'next/link'
import Spline from '@splinetool/react-spline'


const Principal = () => {
  const [gridTActive, setGridTActive] = React.useState(styles.gridText)
  const [gridIActive, setGridIActive] = React.useState(styles.gridImage)
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const el = React.useRef(null);
 
 
  React.useEffect(() => {
    const typing = new Typed(el.current, {
      strings:["Analista de Sistemas", "Desenvolvedor de Sistemas", "Especialista em Automação de Marketing Digital"],
      typeSpeed: 50,      
      loop: true
    })

    return () => typing.destroy();
  },[])

  React.useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    const ctx = canvas?.getContext('2d') as CanvasRenderingContext2D;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const katakana = 'アカサタナハマヤラワイキシチニヒミリウクスツヌフムユルエケセテネヘメレオコソトノホモヨロヲン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';
    const alphabet = katakana + latin + nums;

    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const rainDrops:number[] = Array.from({ length: columns }).fill(1) as number[];

    const draw = () => {
      ctx.fillStyle = 'rgba(13, 13, 13, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#034aa6';
      ctx.font = `${fontSize}px monospace`;

      rainDrops.forEach((y, i) => {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        ctx.fillText(text, i * fontSize, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      });
    };

    const interval = setInterval(draw, 30);

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', () => {});
    };
  }, []);

 React.useEffect(() => {
  setGridTActive(styles.gridTextActive)
  setGridIActive(styles.gridImageActive)
 },[])

  return (<>
    <section className={styles.sectionPrincipal}>
      <canvas ref={canvasRef} className={styles.canvas}></canvas>
      <Container className={styles.containerWrap}>
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
      </Container>      
    </section>
  </>
  )
}

export default Principal