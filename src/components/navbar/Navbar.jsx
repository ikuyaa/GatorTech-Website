"use client";
import React, { useState, useEffect } from 'react'
import './Navbar.css'
import logo from '../../../public/assets/img/Logo1 250x250.png'
import mobileLogo from '../../../public/assets/img/text-character-logo-1.png'
import Link from "next/link";
import Image from 'next/image';


const Navbar = () => {

  const sidebarOpenWidth = '65%'
  const sidebarClosedWidth = '0%'
  const supportLink = 'https://support.gatortech.us/'
  const billingLink = 'https://pay.gatortech.us/client/login'

  let closing = false;

  //Nav Item Texts
  const Home = 'Home';
  const About = 'About';
  const Services = 'Services';
  const Booking = 'Booking';
  const Support = 'Support';
  const Billing = 'Billing';
  const ContactUs = 'Contact Us';

  const [isOpen, setIsOpen] = useState(false)
  
  let sidebarRef = React.useRef();

    const handleSidebar = () => {
      if(isOpen){
        toggleSidebar();
      } else {
        exitSidebar();
      }
    }

    useEffect(() => { //Use effect to handle the sidebar state
      handleSidebar();
    })

    useEffect(() => { //Use effect to add an mousedown event to close the sidebar when clicking outside of it
      document.addEventListener("mousedown", (event) => {
        if(!sidebarRef?.current?.contains(event.target) && isOpen) {
          setIsOpen(false)
        }
      })
    })


    //Function called when the sidebar open button is clicked
    const toggleSidebar = () => {
      if(closing)
        return;

      const sidebar = document.querySelector('.sidebar')
      const image = document.querySelector('.mobile-nav-logo')
      const sidebarToggle = document.querySelector('.sidebar-open')
      const sidebarItems = document.querySelectorAll('.sidebar-item')
      const sidebarLogo = document.querySelector('.sidebar-logo')

      //Scale open the sidebar to its full width, and disable the navbar image
      sidebar.style.width = sidebarOpenWidth
      image.style.display = 'none'

      //Hide the sidebar toggle svg and set the animation for the sidebar logo
      sidebarToggle.style.display = 'none'
      sidebarLogo.style.animation = 'shaking 0.5s infinite'

      setTimeout(() => {
        sidebarItems.forEach(item => {
          item.style.visibility = 'visible'
          item.style.display = 'flex'
          item.style.scale = 1
          sidebarLogo.style.display = 'flex'
          sidebarLogo.style.scale = 1
          image.style.scale = 0
        })
      }, 200)
    }

    //Function called when the sidebar exit button is clicked
    const exitSidebar = () => {
      if(sidebarRef == null)
        return;

      closing = true;

      const sidebar = document.querySelector('.sidebar')
      const image = document.querySelector('.mobile-nav-logo')
      const sidebarToggle = document.querySelector('.sidebar-open')
      const sidebarItems = document.querySelectorAll('.sidebar-item')
      const sidebarLogo = document.querySelector('.sidebar-logo')

      //Scale down all the text
      sidebarItems.forEach(item => {
        item.style.scale = 0
      })

      //Scale down the sidebar logo
      sidebarLogo.style.scale = 0

      //After 450ms, set the width of the sidebar to 0
      setTimeout(() => {
        sidebar.style.width = sidebarClosedWidth
        image.style.display = 'flex'
        image.style.scale = 1
      }, 450)

      //After 600ms, set the sidebar toggle svg visible again
      setTimeout(() => {
        sidebarToggle.style.display = 'flex'
        closing = false;
      }, 600)

      if(isOpen)
        setIsOpen(false)
    }

  return (
    <div className='container'>
        <ul className='sidebar' ref={sidebarRef}>
            <svg onClick={ () => setIsOpen(false)} className='sidebar-exit' xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
            <Image src={logo} alt="GatorTech Logo" className="sidebar-logo"/>
            <li className='sidebar-item' onClick={() => setIsOpen(false)}><Link href='/'>{Home}</Link></li>
            <li className='sidebar-item' onClick={() => setIsOpen(false)}><Link href='/about'>{About}</Link></li>
            <li className='sidebar-item' onClick={() => setIsOpen(false)}><Link href='/services'>{Services}</Link></li>
            <li className='sidebar-item' onClick={() => setIsOpen(false)}><a href='#'>{Booking}</a></li>
            <li className='sidebar-item' onClick={() => setIsOpen(false)}><a href={supportLink} target='_blank'>{Support}</a></li>
            <li className='sidebar-item' onClick={() => setIsOpen(false)}><a href={billingLink} target='_blank'>{Billing}</a></li>
            <li className='sidebar-item' onClick={() => setIsOpen(false)}><Link href='/contact'><button className='nav-btn'>{ContactUs}</button></Link></li>         
        </ul> 
        <ul className="mobile-nav-bar">
            <li className='sidebar-open' onClick={ ()=> setIsOpen(true) }><a href='#'><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e8eaed"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a></li>
            <Link href="/" className="nav-image-link"><Image src={mobileLogo} alt="GatorTech Logo" className="nav-logo mobile-nav-logo"/></Link>
        </ul>
        <ul className="web-nav-bar">
            <Image src={logo} alt="GatorTech Logo" className="nav-logo"/>
            <li className='underlined-on-hover'><Link href="/">{Home}</Link></li>
            <li className='underlined-on-hover'><Link href="/about">{About}</Link></li>
            <li className='underlined-on-hover'><Link href="/services">{Services}</Link></li>
            <li className='underlined-on-hover'><a href=''>{Booking}</a></li>
            <li className='underlined-on-hover'><a href={supportLink} target='_blank'>{Support}</a></li>
            <li className='underlined-on-hover'><a href={billingLink} target='_blank'>{Billing}</a></li>
            <li><Link href='/contact'><button className='nav-btn'>{ContactUs}</button></Link></li>
        </ul>
    </div>
  )
}

export default Navbar