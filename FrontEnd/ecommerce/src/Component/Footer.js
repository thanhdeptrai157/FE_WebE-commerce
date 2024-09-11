import React from "react";
import '../Style/Footer.css'
import OfferPopup from "./OfferPopup";
import { faFacebook, faGithub, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
    return (
        <div>
            <OfferPopup />
            <div className="footer">
                <div className="footerContent">
                    <div className="companyLogo">
                        <div id="nameLogo">SHOP.CO</div>
                        <div className="scriptNote fontContent">We have clothes that suits your style and which you’re proud to wear. From women to men.</div>
                        <div className="icon">
                            <FontAwesomeIcon icon={faFacebook} />
                            <FontAwesomeIcon icon={faGithub} />
                            <FontAwesomeIcon icon={faInstagram} />
                            <FontAwesomeIcon icon={faTwitter} />
                        </div>
                    </div>
                    <div className="company">
                        <h4>COMPANY</h4>
                        <ul className="footerUl">
                            <li>About</li>
                            <li>Features</li>
                            <li>Works</li>
                            <li>Career</li>
                        </ul>
                    </div>
                    <div className="help">
                        <h4>HELP</h4>
                        <ul className="footerUl">
                            <li>Customer Support</li>
                            <li>Delivery Details</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className="faq">
                        <h4>FAQ</h4>
                        <ul className="footerUl">
                            <li>Account</li>
                            <li>Manage Deliveries</li>
                            <li>Orders</li>
                            <li>Payments</li>
                        </ul>
                    </div>
                    <div className="resources">
                        <h4>RESOURCES</h4>
                        <ul className="footerUl">
                            <li>Free eBooks</li>
                            <li>Development Tutorial</li>
                            <li>How to - blog</li>
                            <li>Youtube Playlist</li>
                        </ul>
                    </div>
                </div>
                <div className="endFooter">
                    <div className="copyRight fontContent">Shop.co © 2000-2023, All Rights Reserved</div>
                    <div className="badge">
                        <img src="Image/Visa.svg" alt="" />
                        <img src="Image/circle.svg" alt="" />
                        <img src="Image/paypal.svg" alt="" />
                        <img src="Image/apay.svg" alt="" />
                        <img src="Image/gpay.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Footer;