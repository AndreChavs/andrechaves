import React from 'react'
import styles from '@/styles/modules/Testimonials.module.css'
import Container from '../layout/Container';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Pagination } from 'swiper/modules';
import Image from 'next/image';


interface TestmonialProps{
  testimonial:{
    id:number;
    name:string;
    company:string;
    text:string;
    image:string;
  }
}

const TestimonialTemplate = ({testimonial}:TestmonialProps) => {
  return (
    <div className={styles.testimonialContent}>
      <div className={styles.avatar}>
        <Image src={testimonial.image} width={300} height={300} alt='avatar' />
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{testimonial.text}</p>
        <p className={styles.author}>{testimonial.name}, {testimonial.company}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Leonardo Alcântara',
      company: 'Grupo Alcântara',
      text: 'O André é um verdadeiro especialista em automação de atendimento. Sua abordagem estratégica e sua habilidade técnica foram fundamentais para o sucesso de nossa iniciativa de automação na Grupo Alcântara. Ele desenvolveu fluxos de chatbot personalizados que melhoraram significativamente a eficiência de nosso atendimento ao cliente, além de aumentar a satisfação do cliente. Se você está buscando otimizar seu atendimento, não procure mais do que o André Chaves.',
      image: '/testimonials/boy.jpeg'
    },
    {
      id: 2,
      name: 'Yeda Gamboa',
      company: 'Gamboa Ltda',
      text: 'Estou muito satisfeita com o trabalho excepcional do André Chaves na criação do nosso novo site para a Gamboa Empreendimentos. Ele captou perfeitamente a essência da nossa marca e traduziu isso em um site moderno, intuitivo e altamente funcional. Desde o início, sua comunicação foi clara e profissional, e ele superou todas as nossas expectativas. Recomendo sem hesitação!',
      image: '/testimonials/girl.jpeg'
    }
  ];



  

  return (
    <section className={styles.section}>
        <h1>Depoimentos</h1>
        <p>O que nossos clientes têm a dizer sobre nossos serviços</p>
      <Container style={{position:"relative"}}>
        <Swiper
          effect={'cube'}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          pagination={true}
          modules={[EffectCube, Pagination]}
          className={styles.swiper}
        >
          {testimonials.map((item) => {
            return (
              <SwiperSlide key={item.name}>
                <TestimonialTemplate testimonial={item}/>
              </SwiperSlide>
            )
          })}
                    
        </Swiper>
        
      </Container>
    </section>
  )
}

export default Testimonials