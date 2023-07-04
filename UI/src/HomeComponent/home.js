import "./home.css";

function Home(){
    return(
        <>
            {/* About Start */}
            <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div class="container">
                    <div class="row gx-5">
                        <div class="col-lg-12">
                            <div class="mb-4">
                                <h5 class="text-primary text-uppercase" style={{"letterSpacing": "5px"}}>About Us</h5>
                                <h1 class="display-5 mb-0">Welcome To Project Management System, Home Page</h1>
                            </div>
                            <h4 class="text-body fst-italic mb-4">Diam dolor diam ipsum sit. Clita erat ipsum et lorem stet no lorem sit clita duo justo magna dolore</h4>
                            <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet et magna</p>
                            
                        </div>
                    </div>
                </div>
            </div>
            {/* About End */}
        </>
    );
}

export default Home;