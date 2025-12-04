import React from 'react'
import HeroSection from '../Home/Component/Herosection'
import FeaturedProduct from '../Home/Component/Featuredproduct'
import AboutUs from '../Home/Component/Aboutsection'
import ProductSection from '../Home/Component/Product'
import WhychooseUs from '../Home/Component/Whychoose.jsx'
import TestimonialSection from '../Home/Component/TestimonialSection'

function Home() {
  return (
    <div>
       <HeroSection />
       <AboutUs />
       <ProductSection />
       <WhychooseUs />
       <TestimonialSection/>
    </div>
  )
}

export default Home