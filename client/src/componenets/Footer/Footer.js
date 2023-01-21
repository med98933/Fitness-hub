import React from 'react'
import './Footer.css'
import {CiFacebook} from 'react-icons/ci'
import {ImWhatsapp} from 'react-icons/im'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
        <div className='footer-container'>
            <ul>
                <li><a href='#Home'>Home</a></li>
                <li><a href='#About'>About us</a></li>
                <li><a href='#Programs'>Programs</a></li>
                <li><a href='#Exercices'>Exercices</a></li>
                <li><a href='#Contact'>Contact</a></li>
            </ul>
            <div className='footer-icons'>
                <CiFacebook className='icon-1'/>
                <ImWhatsapp className='icon'/>
                <BsInstagram className='icon'/>
            </div>
            <p style={{fontSize: '0.8rem', opacity: '0.7', margin: '2rem'}}>Copyright &copy; all rights reserved</p>
        </div>
    </footer>
  )
}

export default Footer
