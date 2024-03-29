import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Certification from '@/components/Certification'
import Skills from '@/components/Skills'
import About from '@/components/About'
import LatestWork from '@/components/LatestWork'
import Footer from '@/components/Footer'
import Testmonials from '@/components/Testmonials'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Agency Marketing',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className='w-full  bg-[#444]'>
          <Navbar />
          <Hero />
        </header>
        <section className='w-[100%] mx-auto'>
          <Certification />
          <Skills />
          <About />
          <LatestWork />
          <Testmonials />
          <Footer />
        </section>
        {children}
      </body>
    </html>
  )
}
