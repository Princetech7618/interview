import React from 'react'
import SeoServices from "./components/Seoservice";
import Aboutcompany from "./components/Aboutcompany";
// import Hero from "./components/Hero";
import HHero from "./components/HHero";
import WhyChooseUs from './components/Whychooseus';
import OurProcess from './components/Ourprocess';
import Testimonials from './components/Testimonials';
import ContactCTA from './components/ContactCTA';
function page() {
  return (
    <div>
      {/* <Hero /> */}
      <HHero />
      <Aboutcompany />
      <SeoServices />
      <WhyChooseUs />
      <OurProcess />
      <Testimonials />
      <ContactCTA />
    </div>
  )
}

export default page
