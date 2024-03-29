import React from 'react'
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";


export default function Contact() {
  return (
    
    // <section id='Contact'>
        <div className='contactus' id='Contact'>
            <div className="box-container">
                <div className="box">
                    <h1>Contact Me</h1>
                    <div>
                        <i className='fa'><FaPhoneSquareAlt /></i>
                        <span style={{color:'black'}}>
                            <h5>+252619577614 or +252618219861</h5>
                        </span>
                    </div>
                    <div>
                        <i className="fa"><MdOutlineMarkEmailUnread /></i>
                        <span style={{color:'black'}}>
                            <h5>suleymaansaid9@gmail.com</h5>
                        </span>
                    </div>
                    <div className="socialmedia">
                        <div className="facebook">
                            <a href="https://www.facebook.com/Suleiman.Official.Profile?mibextid=ZbWKwL" style={{color:'black'}}><FaFacebook size={28}/></a>
                        </div>
                        <div className="instagram">
                            <a href="https://www.instagram.com/suleiman_said_mokhtar" style={{color:'black'}}><FaInstagram size={28}/></a>
                        </div>
                        <div className="tiktok">
                        <a href="tiktok.com/@caga_dahab_8" style={{color:'black'}}><FaTiktok  size={28}/></a>
                        </div>
                    </div>

                </div>

                <div className="box">
                    <form action="">
                        <input type="text" placeholder="Your Name" />
                        <input type="email" placeholder="Your Email" />
                        <textarea rows="6" placeholder="Your Message"></textarea>
                        <a className="btn">Send Message</a>
                    </form>
                </div>
            </div>
        </div>
    // </section>
  )
}
