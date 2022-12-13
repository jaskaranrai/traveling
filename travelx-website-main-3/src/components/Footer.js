import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>

        <section className="footer-ntas">
        <iframe 
            src="https://www.dhs.gov/ntas/" 
            name="National Terrorism Advisory System" 
            title="National Terrorism Advisory System" 
            width="170" 
            height="180" 
            scrolling="no" 
            frameborder="0" 
            seamless border="0"
          
            >

            </iframe>
        </section>

        <div className='footer-links'>
            <div className='footer-link-wrappers'>
                <div className='footer-link-items'>
                    <h2>About</h2>
                    <Link to='/sign-in'>How it works</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Terms of Service</Link>
                </div>

                <div className='footer-link-items'>
                    <h2>Contact</h2>
                    <Link to='/'>Contact</Link>
                    <Link to='/'>Support</Link>
                    <Link to='/'>Destinations</Link>
                    <Link to='/'>Sponsorships</Link>
                </div>

            </div>

            <div className='footer-link-wrappers'>
                <div className='footer-link-items'>
                    <h2>Policy</h2>
                    <Link to='/'>Accessibility</Link>
                    <Link to='/'>Accountability</Link>
                    <Link to='/'>Privacy</Link>
                    <Link to='/'>FOIA</Link>
                    <Link to='/'>Site Policies</Link>
                </div>

                <div className='footer-link-items'>
                    <h2>Government</h2>
                    <Link to='/'>The White House</Link>
                    <Link to='/'>USA</Link>
                </div>
            </div>

            {/* <div className="footer-link-wrappers">
            <iframe 
            src="https://www.dhs.gov/ntas/" 
            name="National Terrorism Advisory System" 
            title="National Terrorism Advisory System" 
            width="170" 
            height="180" 
            scrolling="no" 
            frameborder="0" 
            seamless border="0"
          
            >

            </iframe>
            </div> */}

        </div>
        <section className="social-media">
            <div className="social-media-wrap">
                <div className="footer-logo">
                    <Link to='/' className='social-logo'>
                        travelX <i className="fas fa-plane-departure" />
                    </Link>
                </div>
                <small className="website-rights">travelX © 2022</small>
                <div className="social-icons">
                    <Link className="social-icon-link facebook"
                    to="/"
                    target="_blank"
                    aria-label='Facebook'
                    >
                        <i className="fab fa-facebook-f"></i>
                    </Link>

                    <Link className="social-icon-link instagram"
                    to="/"
                    target="_blank"
                    aria-label='Instagram'
                    >
                        <i className="fab fa-instagram"></i>
                    </Link>

                    <Link className="social-icon-link twitter"
                    to="/"
                    target="_blank"
                    aria-label='Twitter'
                    >
                        <i className="fab fa-twitter"></i>
                    </Link>

                    <Link className="social-icon-link youtube"
                    to="/"
                    target="_blank"
                    aria-label='Youtube'
                    >
                        <i className="fab fa-youtube"></i>
                    </Link>

                    <Link className="social-icon-link LinkedIn"
                    to="/"
                    target="_blank"
                    aria-label='LinkedIn'
                    >
                        <i className="fab fa-linkedin"></i>
                    </Link>

                    <Link className="social-icon-link flickr"
                    to="/"
                    target="_blank"
                    aria-label='Flickr'
                    >
                        <i className="fab fa-flickr"></i>
                    </Link>
                    

                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer;