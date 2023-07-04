import "./slider.css";
import { useState, useEffect } from "react";
function Slider(){
    const [sliderContent, setSliderContent] = useState();
    useEffect(()=>{
        if(localStorage.getItem("token")!=undefined)
        {
            setSliderContent(
                <>
                    
                </>
            );
        }

        else{
            setSliderContent(
                <>
                    {/* Carousel Start */}
                    <div class="container-fluid p-0 mb-5">
                        <div id="header-carousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#header-carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#header-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#header-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img class="w-100" src="assets/img/slider1.jpg" width="1920" height="650" alt="Image"/>
                                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                        <div class="p-3" style={{"maxWidth": "900px"}}>
                                            <h5 class="text-white text-uppercase animated bounceInDown">Project Management System</h5>
                                            <h1 class="display-1 text-white mb-md-4 animated zoomIn">Online Project Allotment</h1>
                                            <a class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Get Quote</a>
                                            <a class="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Contact Us</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img class="w-100" src="assets/img/slider2.jpg" width="1920" height="650" alt="Image"/>
                                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                        <div class="p-3" style={{"maxWidth": "900px"}}>
                                            <h5 class="text-white text-uppercase animated bounceInDown">Project Management System</h5>
                                            <h1 class="display-1 text-white mb-md-4 animated zoomIn">Online Project Submition</h1>
                                            <a class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Get Quote</a>
                                            <a class="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Contact Us</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img class="w-100" src="assets/img/slider3.jpg" width="1920" height="650" alt="Image"/>
                                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                        <div class="p-3" style={{"maxWidth": "900px"}}>
                                            <h5 class="text-white text-uppercase animated bounceInDown">Project Management System</h5>
                                            <h1 class="display-1 text-white mb-md-4 animated zoomIn">Online Task Will Be Provided</h1>
                                            <a class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Get Quote</a>
                                            <a class="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Contact Us</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                                data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#header-carousel"
                                data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    {/* Carousel End */}
                </>
            );
        }
    });
    return(
        <>
            {sliderContent}
        </>
        
    );
}

export default Slider;