import React, { ReactNode } from 'react'
import { Poppins } from 'next/font/google'
import Header from './header/Header'
 
const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

interface PropsLayout{
  children: ReactNode
}

const Layout = ({children}: PropsLayout) => {
  return (
    <>
      <Header className={poppins.className} />
      <main className={`${poppins.className}`} style={{marginTop: '80px'}}>
        {children}
      </main>
    </>
  )
}

export default Layout