import React from 'react'
import Container from '../layout/Container'
import styles from '@/styles/modules/Skills.module.css'
import { Grid04 } from '../layout/Grids'
import Image from 'next/image'
import html5 from '/public/images/html5.png'

const Skills = () => {
  
  return (
    <section id='skills' className={styles.section}>
        <h1 className={styles.title}>Skills</h1>
      <Container className={styles.containerSkills}>
        <Grid04>
          <h2 className={styles.subTitle}>Lenguages</h2>
          <div className={styles.images}>
            <div>
              <Image src={html5.src} width={90} height={90} alt='HTML5' />
              <p>html 5</p>
            </div>
            <div>
              <Image src='/images/CSS3.png' width={90} height={90} alt='CSS 3' />
              <p>CSS 3</p>
            </div>
            <div>
              <Image src='/images/javascript.png' width={90} height={90} alt='Javascript' />
              <p>Javascript</p>
            </div>
            <div>
              <Image src='/images/typescript.png' width={90} height={90} alt='Typescript' />
              <p>Typescript</p>
            </div>
            <div>
              <Image src='/images/Rust.png' width={90} height={90} alt='Rust' />
              <p>Rust</p>
            </div>                      
          </div>
        </Grid04>
        <Grid04>
          <h2 className={styles.subTitle}>Stack</h2>
          <div className={styles.images}>
            <div>
              <Image src='/images/react.png' width={90} height={90} alt='React.js' />
              <p>React.js</p>
            </div>
            <div>
              <Image src='/images/nodeJS.png' width={90} height={90} alt='Node.js' />
              <p>Node.js</p>
            </div>
            <div>
              <Image src='/images/Nextjs.png' width={90} height={90} alt='Next.js' />
              <p>Next.js</p>
            </div>
            <div>
              <Image src='/images/Nestjs.png' width={90} height={90} alt='Nest.js' />
              <p>Nest.js</p>
            </div>                    
          </div>
        </Grid04>
        <Grid04>
          <h2 className={styles.subTitle}>Others</h2>
          <div className={styles.images}>
            <div>
              <Image src='/images/adobexd.png' width={90} height={90} alt='AdobeXD' />
              <p>AdobeXD</p>
            </div>
            <div>
              <Image src='/images/SASS.png' width={90} height={90} alt='SASS' />
              <p>SASS</p>
            </div>   
            <div>
              <Image src='/images/MUI.png' width={90} height={90} alt='Material UI' />
              <p>Material UI</p>
            </div>
            <div>
              <Image src='/images/tailwindcss.png' width={90} height={90} alt='Tailwind' />
              <p>Tailwind</p>
            </div>
            <div>
              <Image src='/images/mysql.png' width={90} height={90} alt='MYSQL' />
              <p>MySQL</p>
            </div>
            <div>
              <Image src='/images/mongoDB.png' width={90} height={90} alt='MongoDB' />
              <p>MongoDB</p>
            </div>
            <div>
              <Image src='/images/prisma.png' width={90} height={90} alt='Prisma' />
              <p>Prisma</p>
            </div>
            <div>
              <Image src='/images/Docker.png' width={90} height={90} alt='Docker' />
              <p>Docker</p>
            </div>       
          </div>
        </Grid04>
      </Container>
    </section>
  )
}

export default Skills