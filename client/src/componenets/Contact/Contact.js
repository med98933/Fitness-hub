import React from 'react'
import './Contact.css'
import { MdOutlineMail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
        <h5 className='hd'>Get in Touch</h5>
        <h2 className='hd'>Contact us</h2>
        <div className='contact-container'>
            
            <div className='contact-options'>
                <article className='contact-option'>
                    <MdOutlineMail className='contact-icon'/>
                    <h4>Email</h4>
                    <h5>zitouniahmed595@gmail.com</h5>
                    <a href='mailto:zitouniahmed595@gmail.com' target='_blank' rel='noreferrer'>Send a message</a>
                </article>
                <article className='contact-option'>
                    <BsWhatsapp className='contact-icon'/>
                    <h4>WhatsApp</h4>
                    <h5>+216 22 210 239</h5>
                    <a href='https://api.whatsapp.com/send?phone+21622210239' target='_blank' rel='noreferrer'>Send a message</a>
                </article>
                
            </div>
            <form>
                    <input type='text' name='name' placeholder='Your Full Name' required/>
                    <input type='email' name='email' placeholder='Your Email' required/>
                    <textarea name='message' rows='7' placeholder='Your Messsage' required></textarea>
                    <button type='submit'>Send Message</button>
            </form>
        </div>
    </section>
  )
}

export default Contact
