import React, { CSSProperties } from 'react'
import Container from '../Container'
import Navbar from './Navbar'

const Header = ({className}: {className?: string}) => {
  const styles: CSSProperties = {
    width: '100%',
    position: 'fixed',
    top: '0px',
    background: '#0d0d0d',
    zIndex: '99',    
  }
  return (
    <header style={styles} className={className}>
      <Container>
        <Navbar />
      </Container>
    </header>
  )
}

export default Header