import React from 'react'
import { Link } from "react-router-dom"

function Footer() {
    return (
        <div>

            {/* footer start */}
            <div className="container-fluid bg-secondary text-light mt-5">
                <div className="row pt-5 px-lg-5">
                    <div className="col-lg-4 col-md-12 mb-5 pe-xl-5">
                        <h5 className=" text-uppercase mb-4">Get in Touch</h5>
                        <p className="mb-4">No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor. Rebum
                            tempor no vero est magna amet no</p>
                        <p className="mb-2">
                            <i className="fa-solid fa-location-dot text-warning me-3"></i>
                            123 Street, New York, USA
                        </p>
                        <p className="mb-2">
                            <i className="fa-solid fa-envelope text-warning me-3"></i>
                            info@example.com
                        </p>
                        <p className="mb-0">
                            <i className="fa-solid fa-phone text-warning me-3"></i>
                            +012 345 67890
                        </p>
                    </div>
                    <div className="col-lg-8 col-md-12">
                        <div className="row">
                            <div className="col-md-4 mb-5">
                                <h5 className="mb-4 text-uppercase">Quick Shop</h5>
                                <div className="d-flex flex-column justify-content-start">
                                    <a href="#" className=" text-light mb-2 aa">
                                        <i className="fa fa-angle-right me-2"></i>
                                        Home
                                    </a>
                                    <a href="#" className="mb-2  text-light aa">
                                        <i className="fa fa-angle-right me-2"></i>
                                        Our Shop
                                    </a>
                                    <a href="#" className="mb-2 text-light aa">
                                        <i className="fa fa-angle-right me-2"></i>
                                        Shop Details
                                    </a>
                                    <a href="#" className="mb-2 text-light aa">
                                        <i className="fa fa-angle-right me-2"></i>
                                        Shopping Cart
                                    </a>
                                    <a href="#" className="mb-2 text-light aa">
                                        <i className="fa fa-angle-right me-2"></i>
                                        Cheakout
                                    </a>
                                    <a href="#" className="mb-2 text-light aa">
                                        <i className="fa fa-angle-right me-2"></i>
                                        Contact Us
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-4 mb-5">
                                <h5 className="mb-4 text-uppercase">My Acoount</h5>
                                <div className="d-flex flex-column justify-content-start">
                                    <a href="#" className=" text-light mb-2 aa">
                                        <i className="fa fa-angle-right me-2"></i>
                                        Home
                                    </a>
                                    <a href="#" className="mb-2  text-light aa">
                                        <i className="fa fa-angle-right me-2"></i>
                                        Our Shop
                                    </a>
                                    <a href="#" className="mb-2 text-light aa">
                                        <i className="fa fa-angle-right me-2"></i>
                                        Shop Details
                                    </a>
                                    <a href="#" className="mb-2 text-light aa">
                                        <i className="fa fa-angle-right me-2"></i>
                                        Shopping Cart
                                    </a>
                                    <a href="#" className="mb-2 text-light aa">
                                        <i className="fa fa-angle-right me-2"></i>
                                        Cheakout
                                    </a>
                                    <a href="#" className="mb-2 text-light aa">
                                        <i className="fa fa-angle-right me-2"></i>
                                        Contact Us
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-4 mb-5">
                                <h5 className=" text-uppercase mb-4">News Letters</h5>
                                <p>Duo stet tempor ipsum sit amet magna ipsum tempor est</p>
                                <form action="">
                                    <div className="input-group">
                                        <input type="text" placeholder="Your Email Address" className="form-control rounded-0" />
                                        <div className="input-group-append">
                                            <button className="btn btn-warning rounded-0">Sign Up</button>
                                        </div>
                                    </div>
                                </form>
                                <h6 className="my-3 text-uppercase">Follow us</h6>
                                <div>
                                    <a href="#" className="btn btn-warning btn-square me-2">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="#" className="btn btn-warning btn-square me-2">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="#" className="btn btn-warning btn-square me-2 ">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                    <a href="#" className="btn btn-warning btn-square me-2">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row border-top mx-lg-5 py-4" style={{ border: 'rgba(256, 256, 256, .1) !important' }}>
                    <div className="col-md-6 px-0 md-center">
                        <p> ©
                            <a className="text-warning" href="#">
                                PN INFOSYS
                            </a>
                        </p>
                    </div>
                    <div className="col-md-6 px-0 text-end md-center">
                        <img className="img-fluid" src="https://pnecommerce.netlify.app/img/payments.png" alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer