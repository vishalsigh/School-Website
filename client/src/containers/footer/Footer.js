import React from 'react';
import gpt3Logo from '../../logo.png';
import './footer.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"
import {faInstagram, faFacebook, faLinkedin} from "@fortawesome/free-brands-svg-icons"

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future<br/> before others</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p><a href="#contact">Contact Us</a></p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>BUDDHA INTERNATIONAL SCHOOL, <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Follow Us</h4>
        <p className='gpt3__footerIcons' ><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>&nbsp; &nbsp; &nbsp; <a href='https://www.facebook.com/bisvns'>Facebook</a> </p>
        <p className='gpt3__footerIcons' ><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>&nbsp; &nbsp; &nbsp; <a href='https://www.instagram.com/schoolbuddhainternational/'>Instagram</a> </p>
        <p className='gpt3__footerIcons' ><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>&nbsp; &nbsp; &nbsp; <a href='https://www.linkedin.com/in/buddha-international-school-851096232'>Linkedin</a> </p>
        <p className='gpt3__footerIcons' ><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>&nbsp; &nbsp; &nbsp; <a href= "mailto:schoolbuddhainternational@gmail.com?subject=Enquiry" > Email Us!</a> </p>
      </div>
      {/* <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div> */}
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Buddha International School</p>
        <p>Narayanpur, Mirzapur</p>
        <p>General Inquires : <a href="tel:+916390000722">+91 63900 00722</a></p>
        {/* <p>info@payme.net</p> */}
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2022 BIS. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;