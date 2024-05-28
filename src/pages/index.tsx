import Contato from '@/components/sections/Contato'
import Principal from '@/components/sections/Principal'
import Skills from '@/components/sections/Skills'
import Servicos from '@/components/sections/Servicos'
import Head from 'next/head'
import Me from '@/components/sections/Me'
import Footer from '@/components/layout/footer/Footer'
import Testimonials from '@/components/sections/Testimonials'

export default function Home() {
  return (
    <>
      <Head>
        <title>Página Principal</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Principal />
      <Servicos />
      <Me />
      <Skills />
      <Testimonials />      
      {/* <Contato /> */}
      <Footer />
    </>
  )
}
