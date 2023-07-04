import "./footer.css";
import { useEffect, useState } from "react";

function Footer()
{

    const [footerContent, setFooterContent] = useState();

    useEffect(()=>{
        if(localStorage.getItem("token")!=undefined )
        {
            setFooterContent(
                <>
                    {/* Footer Start */}
                    
                    <div class="container-fluid bg-primary text-light py-4">
                        <div class="container">
                            <div class="row g-5">
                                <div class="col-md-6 text-center text-md-start">
                                    <p class="mb-md-0">&copy; <a class="text-white border-bottom">Project Management System</a>. All Rights Reserved.</p>
                                </div>
                                <div class="col-md-6 text-center text-md-end">
                                    <p class="mb-0">Designed by <a class="text-white border-bottom" href="https://htmlcodex.com">PMS</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Footer End */}    
                </>
            );
        }
        else{
            setFooterContent(
                <>
                    {/* Footer Start */}
                    <div class="container-fluid bg-dark text-light mt-5 py-5 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="container pt-5">
                            <div class="row g-5">
                                <div class="col-lg-3 col-md-6">
                                    <h3 class="text-white mb-4">Quick Links</h3>
                                    <div class="d-flex flex-column justify-content-start">
                                        <a class="text-light mb-2"><i class="bi bi-arrow-right text-primary me-2"></i>Home</a>
                                        <a class="text-light mb-2"><i class="bi bi-arrow-right text-primary me-2"></i>About Us</a>
                                        <a class="text-light mb-2"><i class="bi bi-arrow-right text-primary me-2"></i>Our Services</a>
                                        <a class="text-light mb-2"><i class="bi bi-arrow-right text-primary me-2"></i>Latest Blog</a>
                                        <a class="text-light"><i class="bi bi-arrow-right text-primary me-2"></i>Contact Us</a>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6">
                                    <h3 class="text-white mb-4">Popular Links</h3>
                                    <div class="d-flex flex-column justify-content-start">
                                        <a class="text-light mb-2"><i class="bi bi-arrow-right text-primary me-2"></i>Home</a>
                                        <a class="text-light mb-2"><i class="bi bi-arrow-right text-primary me-2"></i>About Us</a>
                                        <a class="text-light mb-2"><i class="bi bi-arrow-right text-primary me-2"></i>Our Services</a>
                                        <a class="text-light mb-2"><i class="bi bi-arrow-right text-primary me-2"></i>Latest Blog</a>
                                        <a class="text-light"><i class="bi bi-arrow-right text-primary me-2"></i>Contact Us</a>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6">
                                    <h3 class="text-white mb-4">Get In Touch</h3>
                                    <p class="mb-2"><i class="bi bi-geo-alt text-primary me-2"></i>X, Indore, India</p>
                                    <p class="mb-2"><i class="bi bi-envelope-open text-primary me-2"></i>info@example.com</p>
                                    <p class="mb-0"><i class="bi bi-telephone text-primary me-2"></i>XXX XXX XXXX</p>
                                </div>
                                <div class="col-lg-3 col-md-6">
                                    <h3 class="text-white mb-4">Follow Us</h3>
                                    <div class="d-flex">
                                        <a class="btn btn-lg btn-primary btn-lg-square rounded me-2"><i class="fab fa-twitter fw-normal"></i></a>
                                        <a class="btn btn-lg btn-primary btn-lg-square rounded me-2"><i class="fab fa-facebook-f fw-normal"></i></a>
                                        <a class="btn btn-lg btn-primary btn-lg-square rounded me-2"><i class="fab fa-linkedin-in fw-normal"></i></a>
                                        <a class="btn btn-lg btn-primary btn-lg-square rounded"><i class="fab fa-instagram fw-normal"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container-fluid bg-primary text-light py-4">
                        <div class="container">
                            <div class="row g-5">
                                <div class="col-md-6 text-center text-md-start">
                                    <p class="mb-md-0">&copy; <a class="text-white border-bottom">Project Management System</a>. All Rights Reserved.</p>
                                </div>
                                <div class="col-md-6 text-center text-md-end">
                                    <p class="mb-0">Designed by <a class="text-white border-bottom" href="https://htmlcodex.com">PMS</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Footer End */}    
                </>
            );
        }
    });

    return(
        <>
            {footerContent}
        </>
    );
}

export default Footer;