'use client'
import type { AppProps } from 'next/app';
import { ThemeProvider } from '../context/theme-context';
import '../styles/globals.css';
import { Toaster } from 'react-hot-toast';
import AuthContextProvider from '@/context/auth-context';
export default function MyApp({ Component, pageProps }: AppProps) {
  return (

    <ThemeProvider>
      <AuthContextProvider>
        <Component {...pageProps} />
        <Toaster
          position="top-center"
          reverseOrder={true}
        />
      </AuthContextProvider >
    </ThemeProvider>
  );
}
