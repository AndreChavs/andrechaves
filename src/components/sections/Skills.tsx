import React from 'react'
import { motion } from 'framer-motion';
import Container from '../layout/Container'
import styles from '@/styles/modules/Skills.module.css'
import { Grid04 } from '../layout/Grids'
import Image from 'next/image'
// import html5 from '/public/images/html5.png'

interface FMProps{
  children: React.JSX.Element,
  x?: number, y?: number, index:number
}

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

  

  const AnimationComponent = ({children, x, y, index}:FMProps) => {
    const randomNumber = Math.floor(Math.random() * 201) - 100;
    const durantion = Math.floor(Math.random() * 5) + 1;
    return (
    <motion.div
      initial={{ x, y }}
      whileHover={{ scale: 1.2 }}      
      whileTap={{ scale: 0.8 }}
      drag    
      dragConstraints={{ left: -50, right: 50, top: -100, bottom: 100 }}
      animate={{
        opacity: 1,
        // rotate: 360,
        x: [durantion, randomNumber, -100, 0],
        y: [0, 50, randomNumber, durantion],
      }}
      transition={{
        duration: durantion + 1,
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
  )}

  
  
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
            <Grid04 style={{
              display:"flex",
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap:'wrap',
            }}>
              {srcL.map((item, index) => {              
                return (
                  <AnimationComponent key={item.src} index={index}>
                    <Image src={item.src} width={90} height={90} alt='tech' style={{ pointerEvents: 'none', display:"block" }}/>
                  </AnimationComponent>
                )              
              })}
            </Grid04>
            <Grid04 style={{
              display:"flex",
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap:'wrap',
            }}>
              {srcS.map((item, index) => {              
                return (
                  <AnimationComponent key={item.src} index={index}>
                    <Image src={item.src} width={90} height={90} alt='tech' style={{ pointerEvents: 'none', display:"block" }}/>
                  </AnimationComponent>
                )              
              })}
            </Grid04>
            <Grid04 style={{
              display:"flex",
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap:'wrap',
            }}>
              {srcD.map((item, index) => {              
                return (
                  <AnimationComponent key={item.src} index={index}>
                    <Image src={item.src} width={90} height={90} alt='tech' style={{ pointerEvents: 'none', display:"block" }}/>
                  </AnimationComponent>
                )              
              })}
            </Grid04>
                           
        </Container>
    </section>
  )
}

export default Skills