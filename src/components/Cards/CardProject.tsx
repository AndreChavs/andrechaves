import React from 'react'
import { Grid04 } from '../layout/Grids'
import styles from '@/styles/modules/CardProject.module.css'

interface CardProjectProps{
  title: string;
  text: string;
  tipeCard:boolean;
}

const CardProject = ({text, title, tipeCard}:CardProjectProps) => {
  return (
    <Grid04 className={tipeCard ? styles.card : styles.card2}>
      <div className={styles.projeto}>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </Grid04>
  )
}

export default CardProject