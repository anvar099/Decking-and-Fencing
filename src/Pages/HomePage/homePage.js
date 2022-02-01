import React from 'react'
import Navbar from '../../Components/Navbar/navbar'
import NavContact from '../../Components/NavContact/navContact'
import Banner from '../../Components/Banner/banner'
import ParaGallery from '../../Components/PragraphAndGallary/paraGallery'
import Services from '../../Components/Services/services'
import Projects from '../../Components/Projects/projects'
import Testimonial from '../../Components/Testimonial/testimonial'
import Contact from '../../Components/Contact/contact'
import Footer from '../../Components/Footer/footer'

const HomePage = () => {
  return (
    <div>
      <NavContact />
      <Navbar />
      <Banner />
      <ParaGallery />
      <Services />
      <Projects />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  )
}

export default HomePage;
