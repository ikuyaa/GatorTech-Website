'use client';
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import './HomepageHeader.css'
import logo from '../../../public/assets/img/text-logo-1.png'
import Image from 'next/image';


const HomepageHeader = () => {
  const [typeEffect] = useTypewriter({
    words: ['I.T. Services', 'Web Design', 'Web Hosting', 'Business Backend', 'E-Commerce'],
    loop: {},
    typeSpeed: 155,
    deleteSpeed: 65,
    Cursor: true,
    cursorStyle: '|',
  })

  return (
    <div className="homepage-header-container">
      <div className="homepage-header">
      <Image className="header-image" src={logo} alt="GatorTech Text Logo"></Image>
        <div className="header-text">
          <p className="heading-middle">Your local stop for</p>
          <h1 className="heading-bottom">
            <span className="typewriter-header">{typeEffect}</span>
            <Cursor />      
          </h1>
        </div>
      </div>
    </div>
  );
}

export default HomepageHeader;