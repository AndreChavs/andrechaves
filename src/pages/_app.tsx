import React from 'react';
import '@/styles/globals.css'
import '@/styles/chatbot.css';
import '@/styles/sites-servicos.css'
import '@/styles/suporte.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/layout/Layout'
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeicons/primeicons.css';
import { useRouter } from 'next/router';


export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  React.useEffect(() => {
    const handleBeforeUnload = (event:any) => {
      // Limpa o localStorage
      localStorage.clear();
    };

    const handleRouteChange = (url:any) => {
      if (!url.startsWith(window.location.origin)) {
        // Se a nova URL não começa com o mesmo domínio, limpa o localStorage
        localStorage.clear();
      }
    };

    // Adiciona eventos
    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('unload', handleBeforeUnload);
    router.events.on('routeChangeStart', handleRouteChange);

    // Remove eventos na desmontagem do componente
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('unload', handleBeforeUnload);
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.events]);

  return <Layout>
    <PrimeReactProvider>
      <Component {...pageProps} />
    </PrimeReactProvider>
  </Layout>
}
