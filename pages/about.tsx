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
import Link from 'next/link'

const about: NextPage = () => {
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
      <div className="mt-[165px] mx-[30px]">
        <div className='xs:mx-[35px] lg:mx-[60px]'>
          <div className='text-white mt-[73px] xl:-mt-[20px] lg:-ml-[100px] xl:-ml-[170px] lg:flex lg:flex-row md:items-end lg:space-x-[100px] xl:space-x-[170px] 2xl:space-x-[280px]'>
            <p className='text-white font-[600] text-[55px] leading-[60px] lg:hidden'>About Me</p>
            <hr className='light-blue border-[3px] w-[150px] mt-[25px] mb-[70px] lg:hidden'/>
            <img src="./images/me.jpeg" alt="" className='w-[363px] xl:w-[400px] h-[528px] xl:h-[582px] mx-auto lg:mx-[0px]'/>
            <div className='mt-[100px] lg:mt-[0px] text-center lg:text-left'>
              <p className='text-white font-[600] text-[55px] lg:text-[37px] leading-[60px] hidden lg:block'>About Me</p>
              <hr className='light-blue border-[3px] w-[224px] sm:w-[204px] lg:w-[140px] mt-[35px] lg:mt-[20px] hidden lg:block'/>
              <div className='lg:w-[360px] xl:w-[450px] text-center lg:text-left mx-auto font-light text-[25px] lg:text-[16px] xl:text-[20px] xl:leading-[30px] 2xl:leading-[33px]'>
                <p className='mt-[20px] lg:mt-[40px]'>
                I am a fullstack web developer based in Lagos State, Nigeria. I started my coding journey in 2017 and now I have over 4+ years of experience. 
                </p>
                <p className='mt-[20px]'>I love finding new ways to solve existing problems ;)I love finding new ways to solve existing problems ;)</p>
                <p className='mt-[20px]'>I also have this excessive hunger to continue learning new things everyday 😅I also have this excessive hunger to continue learning new things everyday 😅 </p>
                <div className='hidden lg:block'>
                  <div className='w-fit px-[20px] py-[13px] grey rounded-full flex space-x-3 hovering-arrow mt-[30px]'>
                    <p className='text-[16px]'>Know more</p>
                    <img src="./icons/Arrow.svg" alt="" className='arrow'/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-[50px] lg:hidden'>
            <Button link={'https://www.linkedin.com/in/adetunji-adeyinka-8aa5311b9/'} text={'GET CV'} height={'200px'} width={'72.3px'} />
          </div>
          <div className='mt-[100px]'>
            <p className='text-white font-[600] text-[40px]'>My Services</p>
            <hr className='light-blue border-[3px] w-[55px] mt-[13px]'/>
          </div>
          <div className='mt-[79px] mx-auto sm:-mx-[60px] lg:-mx-[20px] xl:-ml-[70px]  md:mt-[86.5px] flex flex-col lg:grid lg:grid-cols-3 space-y-[102px] lg:space-y-0'>
            <ServiceCard 
              iconPath={'bullseye.svg'} 
              title={'Goal Oriented'} 
              description={'I check your website before making changes. I seek for potential user problems, big or small, and offer fixes to ensure your user is on the right path to attain their goals.'}
            />
            <ServiceCard 
              iconPath={'scalable.svg'} 
              title={'Scalability'} 
              description={'I develop scalable websites with your goals in mind. I make websites easy to update and maintenance so your team has full control.'}
            />
            <ServiceCard 
              iconPath={'quality.svg'} 
              title={'Quality Assured'} 
              description={'I check your website before making changes. I seek for potential user problems, big or small, and offer fixes to ensure your user is on the right path to attain their goals'}
            />
          </div>
          <div className='mt-[100px]'>
            <p className='text-white font-[600] text-[40px]'>My Work Process</p>
            <hr className='light-blue border-[3px] w-[55px] mt-[13px]'/>
          </div>
          <div className='flex flex-col lg:grid lg:grid-cols-3 space-y-[65px] lg:space-y-0 lg:gap-x-[50px] mt-[79px] sm:-mx-[60px] lg:-mx-[20px] xl:-ml-[70px] '>
            <WorkProcess 
              iconPath={'lightbulb.svg'} 
              title={'Discover'} 
              description={'I scour the web and conduct personal reserach to find out the problems facing the problem I am trying to solve.'} 
              width={'62.7px'} 
              height={'65.21px'}
            />
            <WorkProcess 
              iconPath={'ponder.svg'} 
              title={'Ponder'} 
              description={"I test answers in a real-world situation to determine whether they fit exactly, and if they don't, I reconsider my strategy."} 
              width={'53px'} 
              height={'53px'}
            />
            <WorkProcess 
              iconPath={'implement.png'} 
              title={'Implement'} 
              description={"After going through all the steps, I get into the zone 👨🏿‍💻and deliver quality and scalable applications."} 
              width={'66px'} 
              height={'66px'}
            />
          </div>
          <div className='mt-[100px]'>
            <p className='text-white font-[600] text-[40px]'>What People Say About Me</p>
            <hr className='light-blue border-[3px] w-[95px] mt-[13px]'/>
          </div>
          <div className='grid grid-rows-1 xl:grid-cols-2 xl:mr-[200px]'>
            <p className='text-white font-[400] text-center xl:text-left leading-[34px] xl:leading-[40px] mt-[37px] xl:mt-[200px] text-[20px] xl:w-[350px]'>Building a great app involves more than just design and programming. I listen to your requirements to ensure you're satisfied. Listen to others' comments.</p>
            <div className='flex xl:flex-row space-y-[45px] space-x-[50px] mt-[60px]'>
              <div className='flex flex-col md:flex-row lg:flex-row xl:flex-col space-y-[50px] md:space-y-[0px] xl:space-y-[50px] md:space-x-[50px] lg:space-x-[50px] mx-auto'> 
                <div className=''>
                  <TestimonialCard imagePath={'testimonial1.png'} name={'Chike Egonu'} role={'Backend Developer'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam velit nam excepturi id ipsam, tenetur earum saepe expedita quisquam veniam!'}/>
                </div>
                <div className=''>
                  <TestimonialCard imagePath={'testimonial1.png'} name={'Chike Egonu'} role={'Backend Developer'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam velit nam excepturi id ipsam, tenetur earum saepe expedita quisquam veniam!'}/>
                </div>
              </div>
              <div className=' hidden xl:flex flex-col space-y-[50px]'> 
                <div className=''>
                  <TestimonialCard imagePath={'testimonial1.png'} name={'Chike Egonu'} role={'Backend Developer'} description={'Lorem iLorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam velit nam excepturi id ipsam, tenetur earum saepe expedita quisquam veniam! '}/>
                </div>
                <div className=''>
                  <TestimonialCard imagePath={'testimonial1.png'} name={'Chike Egonu'} role={'Backend Developer'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam velit nam excepturi id ipsam, tenetur earum saepe expedita quisquam veniam!'}/>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-[100px]'>
            <p className='text-white font-[600] text-[40px]'>My Tech Stack</p>
            <hr className='light-blue border-[3px] w-[55px] mt-[13px]'/>
            <div className='mt-[36px]'>
              <TechStack/>
            </div>
          </div>
          <div className='mt-[100px]'>
            <Social_Links/>
          </div>
        </div>
      </div>
      <div className='lg:absolute lg:top-[200px] xl:top-[150px] right-[50px]'>
        <div className='hidden lg:flex lg:flex-col mt-5 lg:space-y-[30px] xl:mt-[80px]'>
          <div className='border-l-white border-l-[1px] h-[70px] lg:ml-[30px]'/>
          <div className="mx-auto flex flex-col space-y-[40px]">
            <div className='w-14 h-14 flex hoverAnimation items-center justify-center'>
              <Link href="https://www.facebook.com/adetunji.adeyinka.1238" passHref>
                <a target="_blank" rel="noopener noreferrer" className=''>
                  <img src="icons/social-icons/facebook.svg" className='w-[31.81px] h-[31.81px]' alt=""/>
                </a>
              </Link>
            </div>
            <div className='w-14 h-14 flex hoverAnimation items-center justify-center'>
            <Link href="https://www.instagram.com/itzadetunji/" passHref>
              <a target="_blank" rel="noopener noreferrer" className=''>
                <img src="icons/social-icons/instagram.svg" className='w-[31.81px] h-[31.81px]' alt=""/>
              </a>
            </Link>
            </div>
            <div className='w-14 h-14 flex hoverAnimation items-center justify-center'>
            <Link href="https://twitter.com/itzadetunji1" passHref>
              <a target="_blank" rel="noopener noreferrer" className=''>
                <img src="icons/social-icons/twitter.svg" className='w-[31.81px] h-[31.81px]' alt=""/>
              </a>
            </Link>
            </div>                  
          </div>
          <div className='border-l-white border-l-[1px] h-[70px] lg:ml-[30px]'/>
        </div>
      </div>
        {/* <ParticleComponent/> */}
      <Footer/>
    </>
  )
}

export default about