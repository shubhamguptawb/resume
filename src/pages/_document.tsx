import { Html, Head, Main, NextScript } from 'next/document';
export default function Document() {
  return (
    <Html className="scroll-smooth bg-bg h-screen w-screen overflow-x-hidden" lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Roboto+Mono&display=swap"
          rel="stylesheet"
        />

        <script src="/scripts/no-flash.js"></script>
      </Head>
      <body className="text-text"


      >

        <Main />
        <NextScript />
      </body>
    </Html>

  );
}
