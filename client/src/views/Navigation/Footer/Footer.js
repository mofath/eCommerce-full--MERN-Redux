import React from 'react'

import './Footer.css'
import { FiPhoneCall } from 'react-icons/fi'
import { BsEnvelopeFill } from 'react-icons/bs'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaGooglePlus } from 'react-icons/fa'
import { TiSocialYoutubeCircular } from 'react-icons/ti'

import { GrTwitter } from 'react-icons/gr'
import android from '../../../assets/img/android.png'
import ios from '../../../assets/img/ios.png'

import Logo from '../../UI/Logo/Logo'

const Footer = () => {
    return (
        <footer className="vertical-layout ">

            <div className="footer-sec01 mycontainer">
                <div className="horizontal-layout">

                    <div className="compart01"><Logo /></div>

                    <div className="subscribe-form compart02 vertical-layout">
                        <h3>SUBSCRIBE NOW!</h3>
                        <h4>Subscribe to our newsletter to get updates on our latest offers!</h4>
                        <div>
                            <span><input type="email" name="email" placeholder="Enter E-mail Address" /></span>
                            <span><button type="submit" >Send</button></span>
                        </div>
                    </div>

                    <div className="download-app compart03 vertical-layout">
                        <h3>DOWNLOAD OUR FREE APP</h3>
                        <h4>Get access to exclusive offers!</h4>
                        <div className="horizontal-layout">
                            <span> <img src={android} alt="android" className='app-btn' /></span>
                            <span><img src={ios} alt="ios" className='app-btn' /></span>
                        </div>
                    </div>

                </div>
            </div>

            <div className="footer-sec02 horizontal-layout mycontainer">

                <div className="contact-us compart01">
                    <div className="contact">
                        <h3>CONTACT US</h3>
                        <h4><i><FiPhoneCall /></i> &nbsp; 19196</h4>
                        <h4><i><BsEnvelopeFill /></i> &nbsp; info@goldenshop.com</h4>
                    </div>
                    <div className="social-icons">
                        <h3>JOIN US ON</h3>
                        <a href="/"><i><FaFacebookSquare /></i></a>
                        <a href="/"><i><GrTwitter /></i></a>
                        <a href="/"><i><FaGooglePlus /></i></a>
                        <a href="/"><i><TiSocialYoutubeCircular /></i></a>
                    </div>
                </div>


                <div className="links compart02">
                    <h3>Quick Links</h3>
                    <h4><a href="/">About Us</a></h4>
                    <h4><a href="/">Careers</a></h4>
                    <h4><a href="/">Terms and Conditions</a></h4>
                    <h4><a href="/">Privacy Policy</a></h4>
                </div>

                <div className="category compart03">
                    <h3>Shop</h3>
                    <h4><a href="/">Ladies</a></h4>
                    <h4><a href="/">Men</a></h4>
                    <h4><a href="/">Girls</a></h4>
                    <h4><a href="/">Boys</a></h4>
                </div>

            </div>

            <div className="footer-sec03 mycontainer">
                <div >
                    <h5>&copy; mohamed.elgaedi@gmail.com | Designed by Mohamed Fathi</h5>
                </div>
            </div>

        </footer>
    )
}

export default Footer;