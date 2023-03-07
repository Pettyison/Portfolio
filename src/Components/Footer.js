import './FooterStyles.css'

import React from 'react'
import { FaHome, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color: 'white', marginRight: '2rem'}}/>
                    <div>
                        <p>Tulsa, OK</p>
                    </div>
                </div>
                <div className='phone'>
                    <h4><FaPhone size={20} style={{color: 'white', marginRight: '2rem'}}/>
                918-926-0379</h4>

                </div>
                <div className='email'>
                    <h4><FaMailBulk size={20} style={{color: 'white', marginRight: '2rem'}}/>
                chasepettypiece@gmail.com</h4>
                
                </div>
            </div>

            <div className='right'>
                <h4>About Me</h4>
                <p>I am a FullStack bootcamp graduate, veteran, and I love to cook.</p>
                <div className='social'>
                <NavLink to='https://www.linkedin.com/in/christopher-pettypiece-65b0b7256/'><FaLinkedin  size={30} style={{color: 'white', marginRight: '1rem'}}/></NavLink>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer