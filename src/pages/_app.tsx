import React from 'react';
import '@/styles/globals.css'
import '@/styles/chatbot.css';
import '@/styles/suporte.css'
import type { AppProps } from 'next/app'
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeicons/primeicons.css';
import Layout from '../components/layout/Layout';




export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>      
      <Component {...pageProps} />    
    </Layout>
  )
  
}
