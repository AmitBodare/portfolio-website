import React from 'react'
import './education.css'
import cdac from '../../assets/pg-dac.png'
import adcet from '../../assets/adcet.png'
import msbte from '../../assets/Msbte.png'

const Education = () => {
  return (
    <div>
      <div class="myEduaction section__padding" id="education">
        <div class="myEduaction_container">
            <div>
                <h2 class="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">Learning Pathway</h2>
            </div>
            <div class="mt-20 flex flex-col">
                <div class="vertical-timeline vertical-timeline--animate vertical-timeline--two-columns">
                    <div id="" class="myEducation_div">
                        <span class="vertical-timeline-element-icon bounce-in" style={{background: 'rgb(56, 62, 86)'}}>
                            <div class="flex justify-center items-center w-full h-full">
                                <img src={cdac} alt="Centre for Development of Advanced Computing, Pune" class="w-[60%] h-[60%] object-contain" style={{width: '100%', height: '100%', objectFit: 'contain', borderRadius: '45px', placeSelf:'center'}}/>
                            </div>
                        </span>
                        <div class="vertical-timeline-element-content bounce-in" style={{background: 'radial-gradient(circle at 3% 25%, rgb(0, 40, 83) 0%, rgb(4, 12, 24) 80%)', color: 'rgb(255, 255, 255)'}}>
                            <div class="vertical-timeline-element-content-arrow" style={{borderRight: '7px solid rgb(35, 38, 49)'}}>
                            </div>
                            <div>
                                <h3 class="text-white text-[24px] font-bold">Post Graduation Diploma - CDAC  </h3>
                                <p class="text-secondary text-[16px] font-bold" style={{margin: '0px',fontSize:'20px'}}>Centre for Development of Advanced Computing, Pune</p>
                                <h8 class="text-white text-[14px] font-semibold">Diploma in Advanced Computing - 73.50%</h8>
                            </div>
                            <ul class="mt-5 list-disc ml-5 space-y-2">
                            <li class="text-white-100 text-[14px] pl-1 tracking-wider">Developed Vehicle Service Management System as a CDAC final project</li>
                            </ul>
                            <p class="text-secondary text-[16px] font-semibold" style={{margin: '0px'}}>Sept 2022 - March 2023</p>
                            <span class="vertical-timeline-element-date"></span>
                        </div>
                    </div>
                    <div id="" class="vertical-timeline-element">
                        <span class="vertical-timeline-element-icon bounce-in" style={{background: 'rgb(56, 62, 86)'}}>
                            <div class="flex justify-center items-center w-full h-full">
                                <img src={adcet} alt="Annasaheb Dange College of Engineering and Technology, Ashta" class="w-[60%] h-[60%] object-contain" style={{width: '100%', height: '100%', objectFit: 'contain', borderRadius: '45px', placeSelf: 'center'}} />
                            </div>
                        </span>
                        <div class="vertical-timeline-element-content bounce-in" style={{background: 'radial-gradient(circle at 3% 25%, rgb(0, 40, 83) 0%, rgb(4, 12, 24) 80%)', color: 'rgb(255, 255, 255)'}}>
                            <div class="vertical-timeline-element-content-arrow" style={{borderRight: '7px solid rgb(35, 38, 49)'}}>
                            </div>
                            <div>
                                <h3 class="text-white text-[24px] font-bold">Graduation - Shivaji University</h3>
                                <p class="text-secondary text-[16px] font-bold" style={{margin: '0px',fontSize:'20px'}}>Annasaheb Dange College of Engineering and Technology, Ashta</p>
                                <h8 class="text-white text-[14px] font-semibold">Mechanical Engineering - 66.10%</h8>
                            </div>
                            <ul class="mt-5 list-disc ml-5 space-y-2">
                            <li class="text-white-100 text-[14px] pl-1 tracking-wider">Partcipated in Robo-Drive event held in ADCET, Ashta.</li>
                            </ul>
                            <p class="text-secondary text-[16px] font-semibold" style={{margin: '0px'}}>Aug 2018 - July 2021</p>
                            <span class="vertical-timeline-element-date"></span>
                        </div>
                    </div>
                    <div id="" class="vertical-timeline-element">
                        <span class="vertical-timeline-element-icon bounce-in" style={{background: 'rgb(56, 62, 86)'}}>
                            <div class="flex justify-center items-center w-full h-full">
                                <img src={msbte} alt="Government Polytechnic, Miraj" class="w-[60%] h-[60%] object-contain" style={{width: '100%', height: '100%', objectFit: 'contain', borderRadius: '45px', placeSelf: 'center'}}/>
                            </div>
                        </span>
                        <div class="vertical-timeline-element-content bounce-in" style={{background: 'radial-gradient(circle at 3% 25%, rgb(0, 40, 83) 0%, rgb(4, 12, 24) 80%)', color: 'rgb(255, 255, 255)'}}>
                            <div class="vertical-timeline-element-content-arrow" style={{borderRight: '7px solid rgb(35, 38, 49)'}}>
                            </div>
                            <div>
                                <h3 class="text-white text-[24px] font-bold">Diploma</h3>
                                <p class="text-secondary text-[16px] font-bold" style={{margin: '0px',fontSize:'20px'}}>Government Polytechnic, Miraj</p>
                                <h8 class="text-white text-[14px] font-semibold">Mechanical Engineering - 82.59%</h8>
                            </div>
                            <ul class="mt-5 list-disc ml-5 space-y-2">
                            <li class="text-white-100 text-[14px] pl-1 tracking-wider">Team member of Zonal Sports Winning Basketball team.</li>
                            <li class="text-white-100 text-[14px] pl-1 tracking-wider">Participated in Inter College Sports as Basketball team member.</li>
                            </ul>
                            <p class="text-secondary text-[16px] font-semibold" style={{margin: '0px'}}>Aug 2015 - June 2018</p>
                            <span class="vertical-timeline-element-date"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Education
