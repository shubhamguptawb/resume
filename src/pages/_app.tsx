'use client'
import type { AppProps } from 'next/app';
import { ThemeProvider } from '../context/theme-context';
import '../styles/globals.css';
import { Toaster } from 'react-hot-toast';
export default function MyApp({ Component, pageProps }: AppProps) {
  console.log(Toaster);

  return (
    <ThemeProvider>

      <Component {...pageProps} />
      <Toaster
        position="top-center"
        reverseOrder={true}
      />
    </ThemeProvider>
  );
}
