import React from 'react'
import styles from '@/styles/modules/Newsletter.module.css'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import Container from '../layout/Container';
import { Grid06 } from '../layout/Grids';
import Image from 'next/image';

const SpinnerButton = () => {
  const [loading, setLoading] = React.useState(false);

  const handleClick = async() => {
    setLoading(true);    
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <Button
      label="Inscrever-se"
      icon={loading ? 'pi pi-spin pi-spinner' : 'pi pi-check'}
      onClick={handleClick}
      disabled={loading}
      
    />
  );
};

const NewsLetterForm = () => {
  return (
    <div className={styles.newsletter}>      
      <Container className={styles.container}>
        <Grid06>
          <Image src={'/newsletter.jpeg'} width={300} height={300} alt="newsletter"/>
        </Grid06>
        <Grid06>
          <h2>Não Perca Nenhuma Atualização!</h2>
          <p>Transforme Seu Negócio com Nossas Soluções Digitais Inovadoras e descubra as últimas tendências em desenvolvimento web, automação de marketing digital e muito mais!</p>
          <form>
            <div className={styles.newforms}>
              <InputText placeholder="Email" />
              <SpinnerButton />
            </div>
          </form>
        </Grid06>
      </Container>      
    </div>
  )
}

export default NewsLetterForm