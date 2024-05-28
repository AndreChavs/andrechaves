import React from 'react'
import styles from '@/styles/modules/Ido.module.css'
import imgPerfil from '../../../public/perfil.png'
import Image from 'next/image'
import { Tooltip as ReactTooltip } from "react-tooltip";

const Me = () => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isClicked, setIsClicked] = React.useState(false)

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsClicked(true)    
  }

  React.useEffect(() => {
    if(isClicked){
      setTimeout(() => {
        setIsClicked(false)
      }, 9000);
    }
  },[isClicked])

  return (
    <section id='Me' className={styles.section}>
      <h1 className={styles.title}>O que eu faço ?</h1>
      <div className={`${styles.ballon} ${isClicked ? styles.clicked : ''}`}><h2>Automação de Marketing Digital:</h2> <p>Desenvolvimento de sistemas automatizados para otimizar campanhas de marketing, aumentar a eficácia e reduzir o tempo gasto em tarefas manuais.</p></div>
      <div className={`${styles.ballon} ${isClicked ? styles.clicked : ''}`}><h2>Integrações e Desenvolvimento de Sistemas:</h2> <p>Criação de soluções de software sob medida para atender às necessidades específicas do seu negócio.</p></div>
      <div className={`${styles.ballon} ${isClicked ? styles.clicked : ''}`}><h2>Criação de Sites e Landing Pages:</h2> <p>Desenvolvo sites personalizados e responsivos, além de landing pages eficazes que capturam leads e aumentam suas taxas de conversão.</p> </div>
      
      <ReactTooltip
        id="my-tooltip-1"
        place="right"
        variant="info"
        content="clique!"
      />
      <div
        data-tooltip-id="my-tooltip-1" 
        className={`${styles.chatbot} ${isHovered ? styles.hovered : ''} ${isClicked ? styles.clicked : ''}`}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={handleClick}
      >
        <div className={`${styles.chatbot_loading} ${isHovered ? styles.hovered : ''}`}></div>
        <div className={`${styles.chatbot_loading} ${isHovered ? styles.hovered : ''}`}></div>
        <div className={`${styles.chatbot_loading} ${isHovered ? styles.hovered : ''}`}></div>
      </div>      
      <Image src={imgPerfil.src} width={imgPerfil.width} height={imgPerfil.height} alt="perfil André Chaves Dev" className={styles.img}/>
      <p><i>A automação inteligente é a chave para desbloquear o verdadeiro potencial do seu negócio online.</i> - <strong>André Chaves</strong></p>
    </section>
  )
}

export default Me