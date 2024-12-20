import React from 'react'
import styles from '@/styles/modules/Ido.module.css'
import imgPerfil from '../../../public/perfil.png'
import Image from 'next/image'
import { Tooltip as ReactTooltip } from "react-tooltip";

const Me = () => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isClicked, setIsClicked] = React.useState(false)

  const handleMouseOver = React.useCallback(() => setIsHovered(true), [])
  const handleMouseOut = React.useCallback(() => setIsHovered(false), [])
  const handleClick = React.useCallback(() => setIsClicked(true),[])



  React.useEffect(() => {
    if(isClicked){

      const time = setTimeout(() => {
        setIsClicked(false)
      }, 15000);

      return () => clearTimeout(time)
    }
  },[isClicked])

  return (
    <section id='Me' className={styles.section}>
      <h1 className={styles.title}>O que eu faço ?</h1>
      <div className={`${styles.ballon} ${isClicked ? styles.clicked : ''}`}><h2>Automação de Marketing Digital na Web:</h2> <p>Desenvolvimento de sistemas automatizados para otimizar campanhas de marketing, aumentar a eficácia e reduzir o tempo gasto em tarefas manuais.</p></div>
      <div className={`${styles.ballon} ${isClicked ? styles.clicked : ''}`}><h2>Integrações e Desenvolvimento de Sistemas:</h2> <p>Criação de soluções de software sob medida para atender às necessidades específicas do seu negócio.</p></div>
      <div className={`${styles.ballon} ${isClicked ? styles.clicked : ''}`}><h2>Consultoria em Desenvolvimento e Licença de Software:</h2> <p>Transforme sua ideia em software com soluções personalizadas e seguras, garantindo a conformidade legal através de licenciamento estratégico.</p> </div>
      
      <ReactTooltip
        id="my-tooltip-1"
        place="right"
        variant="info"
        content="clique aqui!"
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
      <p><i>A chave para o sucesso digital é uma combinação de sistemas personalizados e estratégias de licenciamento eficazes para garantir sua legalidade.</i><br></br> - <strong>André Chaves</strong></p>
    </section>
  )
}

export default Me