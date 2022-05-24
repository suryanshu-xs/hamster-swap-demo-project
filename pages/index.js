import Head from 'next/head'
import React from 'react'
import Body from '../Components/Body'
import Footer, { FooterBottom } from '../Components/Footer'
import Navbar from '../Components/Navbar'
import WaveSVG from '../Components/WaveSVG'


const Home = () => {
  return (
    <div className='main-container' >
      <Head>
        <title>Hamster Swap - Suryanshu</title>
        <meta name="description" content="This is just a demo project developed by Suryanshu." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Body />
      <WaveSVG />
      <Footer />
      <FooterBottom />

    </div>
  )
}

export default Home