import Head from 'next/head'
import React from 'react'
import Body from '../Components/Body'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hamster Swap - Suryanshu</title>
        <meta name="description" content="This is just a demo project developed by Suryanshu." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Body />

      <Footer />

    </div>
  )
}
