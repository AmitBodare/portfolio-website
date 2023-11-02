import React from 'react'
import './intro.css'
import bg from '../../assets/image.png'

const Intro = () => {

  const resumeFile='https://drive.google.com/file/d/1zGoQ2ad2KMTH2EnbjBtiZVH5xFAsQvTT/view?usp=sharing';
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Amit</span><br />Aspiring Fresher</span>
            <p className='introPara'>Aspiring Fresher who is familiar with Full Stack Development<br /> technologies and eager to learn more about them.</p>
            <a className='resumeLink' href={resumeFile} download>Get My Resume..</a>
        </div>
    <img src={bg} alt='Profile' className='bg' />
    </section>
  )
}

export default Intro
