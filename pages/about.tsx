import { NextPage } from 'next'
import React from 'react'
import Button from './components/Button'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ServiceCard from './components/ServiceCard'
import WorkProcess from './components/WorkProcess'
import ParticleComponent from './components/ParticleComponent'
import TestimonialCard from './components/TestimonialCard'
import TechStack from './components/TechStack'
import Social_Links from './components/SocialLinks'

const about: NextPage = () => {

  const ServiceCardContents = [
    {
        iconpath: '/icons/service-icons/bullseye.svg', 
        title: 'Goal Oriented', 
        description: 'I check your website before making changes. I seek for potential user problems, big or small, and offer fixes to ensure your user is on the right path to attain their goals.'
    },
    {
        iconpath: '/icons/service-icons/scalable.svg', 
        title: 'Scalability', 
        description: 'I develop scalable websites with your goals in mind. I make websites easy to update and maintenance so your team has full control.'
    },
    {
        iconpath: '/icons/service-icons/quality.svg', 
        title: 'Quality Assured', 
        description: 'I check your website before making changes. I seek for potential user problems, big or small, and offer fixes to ensure your user is on the right path to attain their goals.'
    },
  ]

  const WorkProcessContents = [
    {
        iconpath: '/icons/work-process-icons/lightbulb.svg', 
        width: '62.7px', 
        height: '65.21px', 
        title: 'Discover', 
        description: 'I scour the web and conduct personal reserach to find out the problems facing the problem I am trying to solve.'
    },
    {
        iconpath: '/icons/work-process-icons/pencil.svg', 
        width: '51px', 
        height: '45.14px', 
        title: 'Define', 
        description: 'I think about the various solutions that could be used for the problem that has been found.'
    },
    {
        iconpath: '/icons/work-process-icons/ponder.svg', 
        width: '53px', 
        height: '53px', 
        title: 'Ponder', 
        description: "I test answers in a real-world situation to determine whether they fit exactly, and if they don't, I reconsider my strategy."
    },
    {
        iconpath: '/icons/work-process-icons/implement.png', 
        width: '66px', 
        height: '66px', 
        title: 'Implement', 
        description: "After going through all the steps, I get into the zone 👨🏿‍💻and deliver quality and scalable applications."
    },
  ]

  const TestimonialCardContents = [
    {
        imagepath: '/images/testimonial1.png', 
        name: 'Ludwig Dieter',
        role: 'FullStack Developer', 
        description: "After going through all the steps, I get into the zone 👨🏿‍💻and deliver quality and scalable applications.After going through all the steps, I get into the zone 👨🏿‍💻and deliver quality and scalable applications"
    },
    {
        imagepath: '/images/testimonial1.png', 
        name: 'Ludwig Dieter',
        role: 'FullStack Developer', 
        description: "After going through all the steps, I get into the zone 👨🏿‍💻and deliver quality and scalable applications.After going through all the steps, I get into the zone 👨🏿‍💻and deliver quality and scalable applications"
    },
  ]

  return (
    <>
      {/* <Navbar/> */}
      <div className="mt-[165px] mx-auto justify-center">
        <div className='mx-[35px]'>
          <div>
            <p className='text-white font-[600] text-[40px]'>About Me</p>
            <hr className='light-blue border-[3px] w-[110px] mt-[16px]'/>
          </div>
          <div className='text-white mt-[73px]'>
            <img src="./images/me.jpeg" alt="" className='w-[363px] h-[528px]'/>
            <div className='mt-[100px] text-[20px] text-center'>
              <p>
              I’m a fullstack web developer who provides quality services of industry satandard. I started my coding journey in 2017 through a friend. 
              </p>
              <p className='mt-[20px]'>I love finding new ways to solve existing problems ;</p>
              <p className='mt-[20px]'>I love finding new ways to solve existing problems ;</p>
              <p className='mt-[20px]'>I also have this excessive hunger to continue learning new things everyday 😅 </p>
            </div>
          </div>
          <div className='mt-[50px]'>
            <Button link={'https://www.linkedin.com/in/adetunji-adeyinka-8aa5311b9/'} text={'GET CV'} height={'200px'} width={'72.3px'} />
          </div>
          <div className='mt-[100px]'>
            <p className='text-white font-[600] text-[40px]'>My Services</p>
            <hr className='light-blue border-[3px] w-[55px] mt-[13px]'/>
          </div>
          <div>
            {ServiceCardContents.map((service, index) => <ServiceCard iconpath={service.iconpath} title={service.title} description={service.description} key={index}/>)}
          </div>
          <div className='mt-[100px]'>
            <p className='text-white font-[600] text-[40px]'>My Work Process</p>
            <hr className='light-blue border-[3px] w-[55px] mt-[13px]'/>
          </div>
          <div>
            {WorkProcessContents.map((process, index) => <WorkProcess iconpath={process.iconpath} title={process.title} description={process.description} width={process.width} height={process.height} key={index}/>)}
          </div>
          <div className='mt-[100px]'>
            <p className='text-white font-[600] text-[40px]'>What People Say About Me</p>
            <hr className='light-blue border-[3px] w-[55px] mt-[13px]'/>
            <p className='text-white font-[400] text-center leading-[34px] pt-[37px] text-[16px]'>Building a great app involves more than just design and programming. I listen to your requirements to ensure you're satisfied. Listen to others' comments.</p>
          </div>
          <div>
            {TestimonialCardContents.map((testimonial, index) => <TestimonialCard imagepath={testimonial.imagepath} name={testimonial.name} role={testimonial.role} description={testimonial.description}/>)}
          </div>
          <div className='mt-[100px]'>
            <p className='text-white font-[600] text-[40px]'>My Tech Stack</p>
            <hr className='light-blue border-[3px] w-[55px] mt-[13px]'/>
            <div className='mt-[36px] -mx-[30px]'>
              <TechStack/>
            </div>
          </div>
          <div className='mt-[100px]'>
            <Social_Links/>
          </div>
        </div>
      </div>
        {/* <ParticleComponent/> */}
      <Footer/>
    </>
  )
}

export default about