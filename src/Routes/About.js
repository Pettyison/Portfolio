import React from 'react'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroImg2 from '../Components/HeroImg2';

const About = () => {
  return (
    <div>
       <Navbar />
       < HeroImg2 heading='About' text='I am a Junior Web Developer. I have completed the FullStack
       Academy offered by University of Oklahoma. I am excited to be apart of the web developer 
       community. I enjoy working with others and am coachable. I learn quickly and have the discipline
       to do anything set in front of me.' />
       <Footer />
    </div>
  )
}

export default About