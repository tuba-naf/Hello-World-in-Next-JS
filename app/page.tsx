import React from 'react'; // Import React to resolve the UMD global error
import Head from 'next/head';
import Header from './components/Header';
import About from './components/About';

export default function Home() {
  return (
    <>
      <Head>
        <title>My Next.js App</title>
        <meta name="description" content="An alternative structure for Next.js components" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <About />
    </>
  );
}