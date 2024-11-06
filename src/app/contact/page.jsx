import React from 'react'
import ContactForm from '../../components/forms/ContactForm'
import GoogleCaptchaWrapper from '../GoogleCaptchaWrapper';
import './contact.css';

export default async function Contact() {

  return (
    <div>
      <GoogleCaptchaWrapper>
      <ContactForm />
      </GoogleCaptchaWrapper>
    </div>
  )
}
