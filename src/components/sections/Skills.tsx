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
      <Container>
        <Grid04>
          <h2 className={styles.subTitle}>Lenguages</h2>
          <div className={styles.images}>
            <div>
              <Image src={html5.src} width={html5.width} height={html5.height} alt='HTML5' />
              <p>html 5</p>
            </div>
            <div>
              <Image src='/images/CSS3.png' width={html5.width} height={html5.height} alt='CSS 3' />
              <p>CSS 3</p>
            </div>
            <div>
              <Image src='/images/javascript.png' width={html5.width} height={html5.height} alt='Javascript' />
              <p>Javascript</p>
            </div>
            <div>
              <Image src='/images/typescript.png' width={html5.width} height={html5.height} alt='Typescript' />
              <p>Typescript</p>
            </div>
            <div>
              <Image src='/images/Rust.png' width={html5.width} height={html5.height} alt='Rust' />
              <p>Rust</p>
            </div>                      
          </div>
        </Grid04>
        <Grid04>
          <h2 className={styles.subTitle}>Stack</h2>
          <div className={styles.images}>
            <div>
              <Image src='/images/react.png' width={html5.width} height={html5.height} alt='React.js' />
              <p>React.js</p>
            </div>
            <div>
              <Image src='/images/nodeJS.png' width={html5.width} height={html5.height} alt='Node.js' />
              <p>Node.js</p>
            </div>
            <div>
              <Image src='/images/Nextjs.png' width={html5.width} height={html5.height} alt='Next.js' />
              <p>Next.js</p>
            </div>
            <div>
              <Image src='/images/Nestjs.png' width={html5.width} height={html5.height} alt='Nest.js' />
              <p>Nest.js</p>
            </div>
            <div>
              <Image src='/images/Docker.png' width={html5.width} height={html5.height} alt='Docker' />
              <p>Docker</p>
            </div>        
          </div>
        </Grid04>
        <Grid04>
          <h2 className={styles.subTitle}>Others</h2>
          <div className={styles.images}>
            <div>
              <Image src='/images/adobexd.png' width={html5.width} height={html5.height} alt='AdobeXD' />
              <p>AdobeXD</p>
            </div>
            <div>
              <Image src='/images/SASS.png' width={html5.width} height={html5.height} alt='SASS' />
              <p>SASS</p>
            </div>   
            <div>
              <Image src='/images/MUI.png' width={html5.width} height={html5.height} alt='Material UI' />
              <p>Material UI</p>
            </div>
            <div>
              <Image src='/images/tailwindcss.png' width={html5.width} height={html5.height} alt='Tailwind' />
              <p>Tailwind</p>
            </div>
            <div>
              <Image src='/images/mysql.png' width={html5.width} height={html5.height} alt='MYSQL' />
              <p>MySQL</p>
            </div>
            <div>
              <Image src='/images/mongoDB.png' width={html5.width} height={html5.height} alt='MongoDB' />
              <p>MongoDB</p>
            </div>
            <div>
              <Image src='/images/prisma.png' width={html5.width} height={html5.height} alt='Prisma' />
              <p>Prisma</p>
            </div>       
          </div>
        </Grid04>
      </Container>
    </section>
  )
}

export default Skills