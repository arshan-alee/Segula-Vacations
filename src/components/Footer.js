import React from 'react'
import './Footer.css'

import { MdOutlineLocationOn } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='Footer'>
            <div className='Footer_Upper'>
                <div className='Footer_About'>
                    <h2 className='Footer_heading'>About Us</h2>
                    <hr />
                    <p>Lorem Ipsum dolor sit amet consecterur Lorem Ipsum  Ipsum dolor sit amet  Ipsum dolor sit amet  dolor sit amet sit amet</p>
                    <div className='Footer_about_Child' style={{marginTop:"10px" }}>
                        <MdOutlineLocationOn style={{ color: "#00b5e2"}} />
                        <span>

                            Lorem ipsum color street 1234
                        </span>
                    </div>
                    <div className='Footer_about_Child'>
                        <BsFillTelephoneFill style={{ color: "#00b5e2" }} />
                        <span>
                            Phone: 1-212-274-8850
                        </span>

                    </div>
                    <div className='Footer_about_Child'>
                        <AiOutlineMail style={{ color: "#00b5e2" }} />
                        <span>
                            Email: info@yourdomain.com
                        </span>

                    </div>
                </div>
                <div className='Footer_Links'>
                    <h2 className='Footer_heading'>Quick Links </h2>
                    <hr />
                    <div className='Footer_Links_div'>
                        <div className='Footer_Links_div_left'>
                            <Link className='footer_links'>Home</Link>
                            <Link className='footer_links'>Luxury Rentals</Link>
                            <Link className='footer_links'>Yatchs</Link>
                            <Link className='footer_links'>Private Jobs</Link>
                            <Link className='footer_links'>Concierge</Link>
                            <Link className='footer_links'>Security</Link>
                            <Link className='footer_links'>faq</Link>

                        </div>
                        <div className='Footer_Links_div_right'>
                            <Link className='footer_links'>Property management</Link>
                            <Link className='footer_links'>Partnet with us</Link>
                            <Link className='footer_links'>Blog</Link>
                            <Link className='footer_links'>About us</Link>
                            <Link className='footer_links'>testimonials</Link>
                            <Link className='footer_links'>Press </Link>
                            <Link className='footer_links'>Contact us</Link>

                        </div>
                    </div>
                </div>

                <div className='Footer_News'>
                    <h2 className='Footer_heading'>NEWSLETTER</h2>
                    <hr />
                    <div className='Footer_News_child'>
                        <input placeholder='Enter Your Email' />
                        <button>Subscribe</button>
                        <div className='Footer_follow'>
                            <h3 className='Footer_heading_Small'>Follow Us: </h3>
                        </div>
                    </div>
                </div>

            </div>
            <div className='Footer_Down'>Footer_Down</div>

        </div>
    )
}

export default Footer