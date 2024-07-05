import React from 'react'
import { motion } from 'framer-motion';
import Container from '../layout/Container'
import styles from '@/styles/modules/Skills.module.css'
import { Grid04 } from '../layout/Grids'
import Image from 'next/image'

interface FMProps{
  children: React.JSX.Element,
  x?: number, y?: number
}


const AnimationComponent = React.memo(({ children, x, y }: FMProps) => {
  const randomNumber = React.useMemo(() => Math.floor(Math.random() * 201) - 100, []);
  const duration = React.useMemo(() => Math.floor(Math.random() * 5) + 1, []);

  return (
    <motion.div
      initial={{ x, y }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      drag
      dragConstraints={{ left: -50, right: 50, top: -100, bottom: 100 }}
      animate={{
        opacity: 1,
        x: [duration, randomNumber, -100, 0],
        y: [0, 50, randomNumber, duration],
      }}
      transition={{
        duration: duration + 1,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      style={{
        width: 100,
        height: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: '50%',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
      }}
    >
      {children}
    </motion.div>
  );
});

const Skills = () => {  

  const srcL = [
    {src:'/images/CSS3.png'},
    {src:'/images/html5.png'},
    {src:'/images/javascript.png'},
    {src:'/images/typescript.png'},
    {src:'/images/Rust.png'},
  ]

  const srcD = [
    {src:'/images/adobexd.png'},
    {src:'/images/SASS.png'},
    {src:'/images/MUI.png'},
    {src:'/images/tailwindcss.png'},
    {src:'/images/mysql.png'},
    {src:'/images/mongoDB.png'},
    {src:'/images/prisma.png'},
    {src:'/images/Docker.png'},
  ]

  const srcS = [
    {src:'/images/react.png'},
    {src:'/images/nodeJS.png'},
    {src:'/images/Nextjs.png'},
    {src:'/images/Nestjs.png'},
  ]

  
  
  return (
    <section id='skills' className={styles.section}>
        <h1 className={styles.title}>Habilidades</h1>
        <p className={styles.subTitle}>FullStack Developer</p>
        <Container style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap:'wrap',
          height:'100%'
        }}>
          {[srcD, srcS, srcL].map((srcArray, index) => {
            return (
              <Grid04 key={index} style={{
                display:"flex",
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap:'wrap',
              }}>
                {srcArray.map((item) => (
                  <AnimationComponent key={item.src}>
                    <Image src={item.src} width={90} height={90} alt='tech' style={{ pointerEvents: 'none', display: "block" }} />
                  </AnimationComponent>
                ))}
              </Grid04>
            )
          })}           
        </Container>
    </section>
  )
}

export default Skills