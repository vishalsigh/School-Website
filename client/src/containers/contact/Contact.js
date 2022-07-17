import React from 'react'
import './contact.css'

export default function Contact() {
  return (
    <div className="contact__container" id="contact">
        <div className="contact__address">
            <h3 className="contact__heading">Address</h3>
            <div className="contact__content">
            <p>Buddha International School</p>
            <p>Narayanpur, Mirzapur</p>
            <p>231305</p>
            <h3 className="contact__in">Contact Information :</h3>
            <p>General Inquires: Admission Counsellor - <a href="tel:+916390000722">+91 63900 00722</a></p>
            <p>Account / Academic Information: Accounts In-charge - <a href="tel:+916390000723">+91 63900 00723</a></p>
            <p>Admin: Admin coordinator - <a href="tel:+916390000724">+91 63900 00724</a></p>
            <p>Transport: Transport In-charge - <a href="tel:+916390000725">+91 63900 00725</a></p>
            
            </div>
        </div>
        <div className="contact__main">
        <form className="contact__form">
            <h3 className="contact__heading">Get In Touch</h3>
            <input className='form__input' type="text" placeholder="Your name" required id="name"></input>
            <input className='form__input' type="text" placeholder="Phone Number" required id="phone"></input>
            <input className='form__input' type="email" placeholder="Email" required id="email"></input>
            <textarea className='form__textarea' type="text" id="message" rows="4" placeholder="How can we help you?"></textarea>
            <button className='contact__btn' type="submit">Submit</button>
        </form>
        </div>
    </div>
  )
}
