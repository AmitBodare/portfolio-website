import React from 'react'
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import './brand.css'

const Brand = () => {

   
  return (
    <div className="social-icons section-padding">
    <div>
        <a href="https://www.facebook.com/amit.bodare.58" className="social-icon">
      <FaFacebook size={32} />
    </a>
    </div>
    <div>
    <a href="https://www.linkedin.com/in/amit-bodare-84633a1aa" className="social-icon">
      <FaLinkedin size={32} />
    </a>
    </div>
    
    <div>
    <a href="https://www.instagram.com/amitbodare18?igshid=OGQ5ZDc2ODk2ZA==" className="social-icon">
      <FaInstagram size={32} />
    </a>
    </div>
    <div>
    <a href="https://www.github.com/AmitBodare" className="social-icon">
      <FaGithub size={32} />
    </a>
    </div>
  </div>
  )
}

export default Brand
