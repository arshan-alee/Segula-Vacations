import React from 'react'
import "./Blog.css"
import { Link } from 'react-router-dom'

import { ImArrowLeft, ImArrowRight } from "react-icons/im";

const Blogs = () => {
    return (
        <div className='Blog__Container'>
            <h2>Latest Blogs</h2>
            <div className='Blog__Icons__Left'>
                {/* <img src="/assets/Blogs/arrow.png" alt="blog" className='Blog__Icons__Img__Left' /> */}

                <ImArrowLeft style={{color: "#00b5e2"}}/>
            </div>
            <div className='Blog__Cards'>
                <div className='Blog__Card'>
                    <div className=' Card__Upper'>
                        <img src="/assets/Blogs/blog1.png" alt="blog" />
                    </div>
                    <div className=' Card__Below'>

                        <h3>Loreum Ipsuem Is a Simply Dummy Text Of the</h3>
                        <p>It is a long established fact that  a reader will be distracted by the readable content of a page when looking as it layout</p>

                        <Link className='blog_links' >READ MORE</Link>

                    </div>

                </div>
                <div className='Blog__Card'>
                    <div className=' Card__Upper'>
                        <img src="/assets/Blogs/blog2.png" alt="blog" />
                    </div>
                    <div className='Card__Below'>

                        <h3>Loreum Ipsuem Is a Simply Dummy Text Of the</h3>
                        <p>It is a long established fact that  a reader will be distracted by the readable content of a page when looking as it layout</p>

                        <Link className='blog_links' >READ MORE</Link>
                    </div>

                </div>
                <div className='Blog__Card'>
                    <div className=' Card__Upper'>
                        <img src="/assets/Blogs/blog3.png" alt="blog" />
                    </div>
                    <div className=' Card__Below'>

                        <h3>Loreum Ipsuem Is a Simply Dummy Text Of the</h3>
                        <p>It is a long established fact that  a reader will be distracted by the readable content of a page when looking as it layout</p>
                        <Link className='blog_links' >READ MORE</Link>

                    </div>

                </div>
            </div>
            <div className='Blog__Icons__Right'>
              <ImArrowRight style={{color: "#00b5e2"}}/>
            </div>
        </div>
    )
}

export default Blogs