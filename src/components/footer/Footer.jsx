import './Footer.css'
import Link from 'next/link'

const Footer = () => {

  return (
    <div className='footer'>
      <div className='footer-container'>
          <div className='footer-legal'>
            <Link href='/termsofservice'>Terms of Service</Link>
            <p>|</p>
            <Link href='/privacypolicy'>Privacy Policy</Link>
            <p>|</p>
            <a href='#'>Acceptable Use Policy</a>
          </div>
          <div className='footer-copyright'>
            <p className='footer-copyright-text'>© { new Date().getFullYear()} GatorTech | All Rights Reserved</p>
          </div>     
      </div>
    </div>
  )
}

export default Footer