import { useState } from 'react'
import Herotext from './components/Herotext'
import Navbar from './components/Navbar'
import Searchbar from './components/Searchbar'
import PricingSection from './components/Pricingsection'
import Stats from './components/Stats'
import Contact from './components/Contact'
import Footer from './components/Footer'



function App() {

  return (
    <>
      <div className='w-screen h-screen'>
      <div className='bg-neutral-900 text-neutral-300 text-center py-1'>Special Pricing for our neighbors in the Indian subcontinent 🇮🇳- enjoy one year full access for just Rs. 999! Get it now!</div>
      <Navbar />
      <Herotext />
      <Searchbar />
      </div>
      <PricingSection />
      <Stats />
      <Contact />
      <Footer />
    </>
  )
}

export default App
