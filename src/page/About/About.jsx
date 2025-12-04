import React from 'react'
import Hero from '../../page/About/Component/Hero.jsx'
import OurHistory from '../../page/About/Component/Ourhistory.jsx'
import MissionVisionValues from '../../page/About/Component/MissionVisionValues.jsx'
import AboutUs from '../About/Component/AboutUs.jsx'


function About() {
  return (
    <div>
      <Hero/>
      <OurHistory/>
      <AboutUs/>
      <MissionVisionValues />
    </div>
  )
}

export default About