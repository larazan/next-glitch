import Head from 'next/head'
import Image from 'next/image'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Notice from '@/components/Notice'
import CookieConfirm from '@/components/CookieConfirm'
import Hero from '@/components/Hero'
import HomeReview from '@/components/HomeReview'
import HomeSpotlight from '@/components/HomeSpotlight'
import HomeNews from '@/components/HomeNews'
import HomeTrending from '@/components/HomeTrending'
import NewRelease from '@/components/NewRelease'

import { Inter } from 'next/font/google'

import pencil from '@/img/home-pencil.svg'
import gem from '@/img/home-gem.svg'
import headphone from '@/img/home-headphones.svg'
import book from '@/img/home-book-green.svg'
import app from '@/img/home-app-yellow.svg'
import Talk from '@/components/Talk'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Notice />
      <Hero /> 
      <main className="">
        <HomeNews />
        <HomeTrending />
        <NewRelease />
        {/*  */}
        
        {/*  */}
        <HomeReview />
        {/*  */}
        <HomeSpotlight />
        <CookieConfirm />
        <Talk />
        <Footer />
      </main>
    </>
  )
}
