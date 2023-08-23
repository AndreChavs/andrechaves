import React from 'react'
import styles from '@/styles/modules/Form.module.css'
import {Formik, Field, ErrorMessage, Form} from 'formik'
import { validateContactForm } from '@/components/forms/func/ValidationForm';
import Container from '../layout/Container';
import { Grid06 } from '../layout/Grids';
import emailjs from '@emailjs/browser';


interface ValuesProps{
  nome: string; 
  email: string;
  mensagem: string;
}

const ContactForm = () => {
  const formRef = React.useRef()
  const [enviado, setEnviado] = React.useState<boolean>(false)

  const initialValue = {
    nome:'',    
    email:'',
    mensagem:''
  }

  async function handlerSubmit(values:ValuesProps,{resetForm}: any) {
    console.log(values)    
    const emailSend = await emailjs.sendForm('gemailMensagem', 'template_0z9urmf', formRef.current , 'VmzPknwz6br_5Tjvh')
    if(emailSend.text === 'OK' && emailSend.status === 200){
      setEnviado(true)
      alert("Email Enviado Com Sucesso !")
    } else {
      setEnviado(false)
      alert("Falha ao Enviar o Email !")
    }  
    resetForm()
  }

  return (
    <Formik initialValues={initialValue} onSubmit={handlerSubmit} validate={validateContactForm}>
      <Form ref={formRef}>
        <Container className={styles.containerForm}>
          <Grid06 className={styles.box}>          
            <Field className={styles.input} 
            type="text" 
            id="nome" 
            name="nome" 
            placeholder='Nome'
            />
            <ErrorMessage name="nome" component="div" />
          </Grid06>          

          <Grid06 className={styles.box}>          
            <Field className={styles.input} type="email" id="email" name="email" placeholder='Email'/>
            <ErrorMessage name="email" component="div" />
          </Grid06>

          <Grid06 className={styles.box}>          
            <Field className={styles.textAreaInput} as="textarea" id="mensagem" name="mensagem" placeholder='Mensagem:'/>
            <ErrorMessage name="mensagem" component="div" />
          </Grid06>
          {(enviado)? <button className={styles.btn} type="submit" disabled>Obrigado !</button> : <button className={styles.btn} type="submit">Enviar</button>}
          
        </Container>
      </Form> 
    </Formik>    
  );
}

export default ContactForm