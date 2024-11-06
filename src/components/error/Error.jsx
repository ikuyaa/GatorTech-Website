import React from 'react'
import './Error.css'
import logo from '../../../public/assets/img/text-character-logo-1.png'
import Link from 'next/link'
import Image from 'next/image'

const Error = () => {
  return (
    <div className='error-container'>
      <ul>
        <li><Image src={logo} className='error-logo'></Image></li>
        <li><h1>404 Page Not Found.</h1></li>
        <li><Link href="/"><button className='error-home-button'>Return Home</button></Link></li>
      </ul>
    </div>
  )
}

export default Error;