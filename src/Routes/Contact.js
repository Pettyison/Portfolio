import React from 'react'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroImg2 from '../Components/HeroImg2';

const Contact = () => {
  return (
    <div>
       <Navbar />
       < HeroImg2 heading='Contact' text='Thank you for taking the time to look at my portfolio.
       If you have any questions you may contact me at my email, LinkedIn, or my phone number located
       in the footer.'/>
       <Footer />
    </div>
  )
}

export default Contact