import './WorkCardStyles.css'

import React from 'react'
import ProjectImg from '../Assets/ProjectImg.avif'
import { NavLink } from 'react-router-dom'

const WorkCard = () => {
  return (
    <div className='work-container'>
        <h1 className='project-heading'>Projects</h1>
        <div className='project-container'>
            <div className='project-card'>
                <img src={ProjectImg} alt='img'/>
                <h2 className='project-title'>Cloud9 Project</h2>
                <div className='pro-details'>
                    <p>This is an e-commerce site that my team and I created.</p>
                    <div className='pro-btns'>
                        <NavLink to='https://cloud-9.fly.dev/' className='btn'>View</NavLink>
                        <NavLink to='https://cloud-9.fly.dev/' className='btn'>Source</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkCard