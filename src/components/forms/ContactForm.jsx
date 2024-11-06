'use client';
import React, { useEffect } from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import { toast } from 'react-toastify'
import './ContactForm.css'
import submitContactForm from '../../helpers/submitContact';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import axios from 'axios';

export default function ContactForm() {
  //Variables for contact information
  const contactForm = React.useRef();
  const contactEmail = 'contact@gatortech.us';
  const contactNumber = '123-456-7890';
  const mailto = `mailto:${contactEmail}`;
  const tel = `tel:${contactNumber}`;

  const maxSubject = 30;
  const maxMessage = 500;

  const createSuccessAlert = (message) => {
    toast.success(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
    });
  }

  const createErrorAlert = (message) => {
    toast.error(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
    });
  }

  const [formState, formAction] = useFormState(submitContactForm, {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const { executeRecaptcha } = useGoogleReCaptcha();

  async function handleSubmit(prevState, formData) {

      if(!executeRecaptcha){
        console.log('Couldn\'t execute recaptcha');
        return;
      }

      const token = await executeRecaptcha('contactForm');

      const captchaRes = await axios({
        method: "post",
        url: "/api/recaptchaSubmit",
        data: {
          token,
        },
        headers: {
          Accept: 'applicaton/json, text/plain, */*',
          "Content-Type": "application/json",
        },
      });

      if(captchaRes?.data?.success === true) {
        try {
          await formAction(prevState, formData);
          resetForm();
          return createSuccessAlert('Message sent successfully!');
        } catch (error) {
          resetForm();
          return createErrorAlert(`There was a problem sending your message. Please try again later. If this problem persists, please contact us directly at ${contactEmail}.`)
        }
      } else {
        return createErrorAlert('Failed to verify the recaptcha. Please try again later.')
      }
  }

  function resetForm() {
    contactForm.current.reset();
  }

  return (
    <div className='form-container'>
      <div className='header-container'>
        <h1 className='page-header'>Reach out to us!</h1>
        <p className='page-text'>
          Feel free to contact GatorTech with any questions you have.
          We are happy to help, and will respond as soon as possible.
          Thank you for your interest!
        </p>
      </div>

      <div className='contact-box'>
        <div className='contact-left'>
          <h3 className='contact-header'>Contact Us</h3>

          <div className='contact-info'>
              <div className='contact-info-holder'>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
                <h2>Email</h2>
                <a href={mailto}>{contactEmail}</a>
              </div>
              <div className='contact-info-holder'>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg>
                <h2>Phone</h2>
                <a className='contact-phone-number' href={tel}>{contactNumber}</a>
              </div>

          </div>
        </div>
        <div className='contact-right'>
        <h3 className='contact-header'>Send Us A Question</h3>
          <form action={handleSubmit} ref={contactForm}>
            <div className='input-row'>
              <div className='input-group'>
                <label className='contact-label'>Name:</label>
                <input name="name" className='contact-input' type="text" placeholder='John Appleseed' required></input>
              </div>
              <div className='input-group'>
                <label className='contact-label'>Phone:</label>
                <input name="phone" className='contact-input' type="tel" placeholder='123-456-7890' required></input>
              </div>
            </div>

            <div className='input-row'>
              <div className='input-group'>
                <label className='contact-label'>Email:</label>
                <input name="email" className='contact-input' type="email" placeholder='john@email.com' required></input>
              </div>
              <div className='input-group'>
                <label className='contact-label'>Subject:</label>
                <input maxlength={maxSubject} name="subject" className='contact-input' type="text" placeholder='Message Subject' required></input>
              </div>
            </div>

            <label className='contact-label'>Message:</label>
            <textarea maxlength={maxMessage} name="message" className='message-text' rows='5' placeholder='Your message...' required></textarea>

            <button className='submit-button' type='submit'>Send</button>
          </form>

        </div>
      </div>
    </div>   
  )
}