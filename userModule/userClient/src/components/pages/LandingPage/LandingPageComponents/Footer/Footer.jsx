import React from 'react'
import "./Footer.css";

const Footer = () => {
    return (
        //    <div>
        <footer className="footer">
            <div className="footer__addr">
                <h1 className="footer__logo">Rablo.in</h1>

                <address>
                    Hometuition.Inc welcomes every <br />
                    enthusiast who is willing to learn and <br />
                    be the part of revolution in our E- <br />
                    learning Platform.<br />
                </address>

                <div className="icons">
                    <ul class="list-inline">
                        <li class="list-inline-item"><a href="#"><i class="fab facebook footer-social-icon fa-facebook-f"></i></a></li>
                        <li class="list-inline-item"><a href="#"><i class="fab twitter footer-social-icon fa-twitter"></i></a></li>
                        <li class="list-inline-item"><a href="#"><i class="fab google footer-social-icon fa-linkedin"></i></a></li>
                        <li class="list-inline-item"><a href="#"><i class="fab apple footer-social-icon fa-youtube"></i></a></li>
                        <li class="list-inline-item"><a href="#"><i class="fab apple footer-social-icon fa-instagram"></i></a></li>
                    </ul>
                </div>
            </div>

            <ul className="footer__nav">
            <div>
                <li className="nav__item">
                    <h2 className="nav__title">Main Menu</h2>

                    <ul className="nav__ul">
                        <li>
                            <a href="#">Become Our Tutor</a>
                        </li>

                        <li>
                            <a href="#">Pricing</a>
                        </li>

                        <li>
                            <a href="#">About Us</a>
                        </li>

                        <li>
                            <a href="#">Login</a>
                        </li>
                    </ul>
                </li>
                </div>
                <div>

                <li className="nav__item">
                    <h2 className="nav__title">Important Links</h2>

                    <ul className="nav__ul">
                        <li>
                            <a href="#">Join Affiliate program</a>
                        </li>

                        <li>
                            <a href="#">Downloadable</a>
                        </li>

                        <li>
                            <a href="#">Feedback</a>
                        </li>

                        <li>
                            <a href="#">Privacy Policy</a>
                        </li>

                        <li>
                            <a href="#">Terms And Conditions</a>
                        </li>

                        <li>
                            <a href="#">Return and Refund Policy</a>
                        </li>

                        <li>
                            <a href="#">Request Verification</a>
                        </li>

                        <li>
                            <a href="#">Help And Support</a>
                        </li>
                    </ul>
                </li>
                </div>
                <div>
                <li className="nav__item">
                    <h2 className="nav__title">Share Us </h2>
                    
                        <li style={{margin:"10px"}}> 
                            <i class="fab facebook footer-social-icon fa-facebook"></i>Facebook
                        </li>

                        <li style={{margin:"10px"}}>
                            <i class="fab instagram footer-social-icon fa-instagram"></i>Instagram
                        </li>

                        <li style={{margin:"10px"}}>
                            <i class="fab telegram footer-social-icon fa-telegram"></i>Telegram
                        </li>

                        <li style={{margin:"10px"}}>
                            <i class="fab whatsapp footer-social-icon fa-whatsapp"></i>Whatsapp
                        </li>
                        <li style={{margin:"10px"}}>
                            <i class="fab linkedin footer-social-icon fa-linkedin"></i>LinkedIn
                        </li>


                        
                    
                </li>
                </div>
            </ul>

            <div className="legal">
                <p>&copy; HomeTuitionEdu <br />
                Pvt Ltd-2020</p>

            </div>
        </footer>
        //    </div>
    )
}

export default Footer