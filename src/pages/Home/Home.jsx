import React from 'react'
import Banner from './Banner'
import OurSection from '../Services/OurSection'
import BrandSlider from '../BrandSlide/BrandSlider'
import HowItWorks from '../works/HowItWorks'
import FeaturesSection from '../Feature/FeaturesSection'

export default function Home() {
  return (
    <>
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <OurSection></OurSection>
      <BrandSlider></BrandSlider>
      <FeaturesSection></FeaturesSection>
    </>
  )
}
