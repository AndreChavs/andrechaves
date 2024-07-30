import React from 'react'
import styles from '@/styles/modules/Integracoes.module.css'
import Container from '../layout/Container';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Image from 'next/image';
import { Button } from 'primereact/button';



const Integracoes = () => {

  return (
    <section className={styles.section}>
        <h1>Do que você precisa?</h1>
        
      <Container style={{position:"relative"}}>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#0d0d0d', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #0d0d0d' }}          
          iconStyle={{ background: '#0d0d0d', color: '#fff', display:"flex", justifyContent:"center", alignItems:"center", fontSize:"1.5rem" }}
          icon={<i className="fa-solid fa-house"></i>}
        >
          <h3 className={styles.title}>Criação de Páginas</h3>
          <h4 className={styles.subtitle}>Para apresentação com foco em conversão de leads</h4>          
          <Image src='/site.jpeg' width={300}  height={300} alt="Criação de páginas web" 
          className={styles.img} 
          />
          <ul className={styles.details}>
            <li>Funcionalidades sob medida</li>
            <li>Design Responsivo</li>
            <li>Otimização em SEO</li>
            <li>Integração com ferramentas de Marketing</li>            
          </ul>
          {/* <Button label='Saiba mais +' className={styles.btn}/> */}
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work" 
          contentStyle={{ background: 'var(--primary)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary)' }}         
          iconStyle={{ background: 'var(--primary)', color: '#fff', display:"flex", justifyContent:"center", alignItems:"center", fontSize:"2rem" }}
          icon={<i className="fa-solid fa-microchip"></i>}
        >
          <h3 className={styles.title}>Integração de APIs para Sistemas Web e Mobile</h3>
          <h4 className={styles.subtitle}>Conecte seu sistema a serviços externos com soluções de integração de APIs, garantindo uma comunicação eficiente e segura entre diferentes plataformas e aplicações.</h4>
          <Image src='/api.png' width={300}  height={300} alt="Integração de APIs" 
          className={styles.img} 
          />
          
          {/* <Button label='Saiba mais +' className={styles.btn}/> */}
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work" 
          contentStyle={{ background: '#0d0d0d', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #0d0d0d' }}         
          iconStyle={{ background: '#0d0d0d', color: '#fff', display:"flex", justifyContent:"center", alignItems:"center", fontSize:"1.8rem" }}
          icon={<i className="fa-solid fa-robot"></i>}
        >
          <h3 className={styles.title}>Automação de Sistemas</h3>
          <h4 className={styles.subtitle}>Otimize e simplifique processos complexos com soluções de automação de sistemas, aumentando a eficiência e reduzindo o tempo de execução de tarefas repetitivas e manuais.</h4>
          <Image src='/chatbot.jpg' width={300}  height={300} alt="Automação de email marketing" 
          className={styles.img} 
          />
          
          {/* <Button label='Saiba mais +' className={styles.btn}/>           */}
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"         
          contentStyle={{ background: 'var(--primary)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary)' }}         
          iconStyle={{ background: 'var(--primary)', color: '#fff', display:"flex", justifyContent:"center", alignItems:"center", fontSize:"1.7rem" }}
          icon={<i className="fa-solid fa-chart-line"></i>}
        >
          <h3 className={styles.title}>Dashboards Personalizados</h3>
          <Image src='/dashboard.jpeg' width={300}  height={300} alt="Automação de email marketing" 
          className={styles.img} 
          />
          <ul className={styles.details}>
            <li>Monitoramento em Tempo Real</li>
            <li>Visualizações Personalizadas</li>
            <li>Desempenho de Vendas</li>
            <li>Integração com Stripe</li>
            <li>Acompanhamento de novas assinaturas, renovações, cancelamentos e receita recorrente</li>            
          </ul>
          <Button label='Saiba mais +' className={styles.btn}/>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"          
          contentStyle={{ background: 'var(--second)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--second)' }}         
          iconStyle={{ background: 'var(--second)', color: '#fff', display:"flex", justifyContent:"center", alignItems:"center", fontSize:"1.7rem" }}
          icon={<i className="fa-solid fa-credit-card"></i>}
        >
          <h3 className={styles.title}>Sistemas de pagamento recorrente</h3>
          <h4 className={styles.subtitle}>Implementação para empresas que oferecem serviços SaaS, assinaturas de conteúdo ou qualquer serviço baseado em mensalidades.</h4>
          <Image src='/planos.png' width={300}  height={300} alt="Automação de email marketing" 
          className={styles.img} 
          />          
          <ul className={styles.details}>
            <li>Automação de Pagamentos</li>
            <li>Gerenciamento de Assinaturas</li>
            <li>Integração com Dashboards</li>
            <li>Relatórios Financeiros</li>                        
          </ul>
          <Button label='Saiba mais +' className={styles.btn}/>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"          
          contentStyle={{ background: 'var(--primary)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary)' }}         
          iconStyle={{ background: 'var(--primary)', color: '#fff', display:"flex", justifyContent:"center", alignItems:"center", fontSize:"1.7rem" }}
          icon={<i className="fa-solid fa-shield-halved"></i>}
          
        >
          <h3 className={styles.title}>Cyber Segurança</h3>
          <h4 className={styles.subtitle}>Segurança de sistemas para proteção dos dados</h4>
          <Image src='/cybersecurity.jpeg' width={300}  height={300} alt="Automação de email marketing" 
          className={styles.img} 
          />
          <ul className={styles.details}>
            <li>Criptografia de dados</li>
            <li>Sistema de Autenticação Multi-fator</li>
            <li>Segurança na Gestão de Assinaturas</li>
          </ul>
        </VerticalTimelineElement>
        {/*  */}
        <VerticalTimelineElement
                
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff', display:"flex", justifyContent:"center", alignItems:"center", fontSize:"1.3rem" }}          
          icon={<i className="fa-solid fa-star"></i>}
        />
      </VerticalTimeline>        
      </Container>
    </section>
  )
}

export default Integracoes