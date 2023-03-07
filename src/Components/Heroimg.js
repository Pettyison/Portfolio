import './HeroImgStyles.css'

import React from 'react'
import IntroImg from '../Assets/IntroImg.jpg'
import { Link } from 'react-router-dom'

const Heroimg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='intro-img' src={IntroImg} alt='IntroImg'/>
        </div>
        <div className='content'>
            <p>Hi, I'm Christopher</p>
            <h1>React Developer</h1>
            <div>
            <Link to='/Project' className='btn'>Projects</Link>
            <Link to='/Contact' className='btn-light'>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Heroimg