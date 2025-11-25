import React from 'react'
import HeroSection from '../Home/Component/Herosection'
import FeaturedProduct from '../Home/Component/Featuredproduct'
import AboutUs from '../Home/Component/Aboutsection'
import ProductSection from '../Home/Component/Product'
import WhychooseUs from '../Home/Component/Whychoose.jsx'
import HowToUse from '../Home/Component/Howtosection.jsx'

function Home() {
  return (
    <div>
       <HeroSection />
       <FeaturedProduct />
       <AboutUs />
       <ProductSection />
       <WhychooseUs />
       <HowToUse />
    </div>
  )
}

export default Home