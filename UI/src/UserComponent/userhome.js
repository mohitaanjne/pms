import "./userhome.css";

function User(){

    
    return(
        <>
            {/* About Start */}
            <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div class="container">
                    <div class="row gx-5">
                        <div class="col-lg-12">
                            <div class="mb-4">
                                <h5 class="text-primary text-uppercase" style={{"letterSpacing": "5px"}}>About Us</h5>
                                <h1 class="display-5 mb-0">Welcome To User Panel</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* About End */}
        </>
    );
}

export default User;