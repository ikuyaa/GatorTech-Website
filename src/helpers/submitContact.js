'use server';
import backend from "../lib/backend";
import { createItems, withToken } from "@directus/sdk";

export default async function submitContactForm(prevState, formData) {
    //Send form data to backend server
    
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const subject = formData.get('subject');
    const message = formData.get('message');

    /*
    try {
        await backend.request(withToken(process.env.BACKEND_TOKEN, createItems(
            'ContactMessages',
            {
              name: name,
              email: email,
              phone_number: phone,
              subject: subject,
              message: message, 
            }
          )));
    } catch (error) {
        console.log(`There was a problem submitting a form. ${error}`);
    }
        */

}