import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import ParticleComponent from './components/ParticleComponent'
import Social_Links from './components/SocialLinks'
import Button from './components/Button'
import PortfolioCard from './components/PortfolioCard'

const contact : NextPage = () => {
  const [contactFormData, setContactFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [formState, setFormState] = useState({
		submitted: false,
		success: false,
		message: null,
	});

	const handleContactFormSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					Accept: "application/json, text/plain, */*",
					"Content-Type": "application/json",
				},
				body: JSON.stringify(contactFormData),
			});

			if (response.status === 200) {
				setFormState({ submitted: true, success: true });
				setContactFormData({ name: "", email: "", subject: "", message: "" });
				window.alert("Message sent!");
			}
		} catch (error) {
			window.alert("Error Sending Message 😢. Try again 🤕.");
			setFormState({ submitted: true, success: false, message: error.message });
		}
	};
  return (
    <>
      {/* <Navbar/> */}
      <div className="mt-[165px] mx-auto justify-center">
        <div className=''>
        	<div className='mx-[30px] md:mx-[60px] lg:mx-[90px]'>
            <p className='text-white font-[600] text-[40px]'>Let's chat</p>
            <hr className='light-blue border-[3px] w-[85px] mt-[16px]'/>
          </div>
          <div className='text-white mt-[80px] mx-[30px] md:mx-[60px] lg:mx-[90px]'>
            <form onSubmit={handleContactFormSubmit}>
              <div className='mt-[45px] flex flex-col space-y-[33px]'>
                <input type="text" name='name' placeholder='What’s your name ?' className='grey placeholder:-pl-[15px] placeholder:text-[16px] placeholder:text-white text-[16px] px-[20px] h-[70px] rounded-[30px] outline-none' value={contactFormData.name} onChange={(e) => setContactFormData({...contactFormData, name: e.target.value,})}/>
                <input type="text" name='name' placeholder='Why are you sending this?' className='grey placeholder:-pl-[15px] placeholder:text-[16px] placeholder:text-white text-[16px] px-[20px] h-[70px] rounded-[30px] outline-none' value={contactFormData.subject}
									onChange={(e) =>
										setContactFormData({
											...contactFormData,
											subject: e.target.value,
										})
									}/>
                <input type="text" name='name' placeholder='What’s your email ?' className='grey placeholder:-pl-[15px] placeholder:text-[16px] placeholder:text-white text-[16px] px-[20px] h-[70px] rounded-[30px] outline-none' value={contactFormData.email}
								onChange={(e) =>
									setContactFormData({
										...contactFormData,
										email: e.target.value,
									})
								}/>
                <textarea name="message" id="" className='grey rounded-[30px] h-[214px] resize-none px-[20px] placeholder:text-white placeholder:text-[16px] pt-[24px] text-[16px] outline-none' placeholder='What do you want to talk about?' value={contactFormData.message}
								onChange={(e) =>
									setContactFormData({
										...contactFormData,
										message: e.target.value,
									})
								}></textarea>
              </div>
              <input type="submit" id="submit" className='mt-[40px] custom-shadow mx-auto rounded-full text-center items-center justify-center grey w-[170px] h-[60.3px] duration-500 ease-in delay-[10ms]' value='Send Message'/>
            </form>
          </div>
        </div>
      </div>
      {/* <ParticleComponent/> */}
      <div className='mt-[95px]'>
        <Social_Links/>
      </div>
      <Footer/>
    </>
  )
};
export default contact
