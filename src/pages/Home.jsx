import React from 'react'
import Navbar from '../component/Navbar'
import Hero from '../component/Hero'
import Books from '../component/Books'
import MarketReadyProducts from '../component/Sell'
import MarketReadyHero from '../component/Hero2'
import VideoDemoSection from '../component/Video'
import InfoBoxesSection from '../component/InfoBox'
import UnlimitedResourcesHero from '../component/Hero3'
import BigWhiteDiv from '../component/WhiteSection'
import Hero4 from '../component/Hero4'
import MustHaveContentHero from '../component/Hero4'
import Hero5 from '../component/Hero5'
import Box from '../component/Book2'
import Hero7 from '../component/Whitebox2'
import Hero8 from '../component/Hero8'
import Hero9 from '../component/Hero9'
import Footer from '../component/footer'
import lHero from '../component/Lhero'

const Home = () => {
  return (
    <>
    <div className='bg-black'>
    <div className="bg-red-600 py-2 w-full p-4 justify-center flex items-center">
      <div className='px-3 py-1 rounded-full bg-black text-white'>
        Kickstart 2026 
      </div>
      <div className='ml-4 text-white'>
        Save 70% on all products!
      </div>
    </div>
    <Navbar />
    <Hero />
    <Books />
    <BigWhiteDiv />
    <MustHaveContentHero />
    <Hero5 />
    <Box />
    <Hero7 />
    <Hero8 />
    <Hero9 />
    <Footer />
    <lHero />
    </div>
    </>
  )
}

export default Home
