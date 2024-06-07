import React, { ReactNode } from 'react'
import ReactChatBot from '@/bot/ReactChatBot'
import Header from './header/Header'


interface PropsLayout{
  children: ReactNode
}

const Layout = ({children}: PropsLayout) => {
  
  return (
    <>
      <Header />
      <main style={{marginTop: '80px'}}>
        {children}
        <ReactChatBot />
      </main>
    </>
  )
}

export default Layout