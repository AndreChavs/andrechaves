import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/layout/Layout'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeicons/primeicons.css';

        

export default function App({ Component, pageProps }: AppProps) {
  return <Layout>
      <PrimeReactProvider>
        <Component {...pageProps} />
      </PrimeReactProvider>
  </Layout>
}
