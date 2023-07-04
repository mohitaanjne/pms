import { Link } from "react-router-dom";
import "./nav.css";
import { useState, useEffect} from "react";
function Navbar(){
    const [navContent, setNavContent] = useState();
    
    useEffect(()=>{
        if(localStorage.getItem('token')!=undefined && localStorage.getItem('role')=='admin')
        {
            setNavContent(
                <>
                    {/* Navbar Start */}
                    <nav class="navbar navbar-expand-lg bg-white navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0">
                        <a class="navbar-brand ms-lg-5">
                            <Link to={"/"}>
                            <h1 class="display-5 m-0 text-primary">P <span class="text-secondary">M </span>S</h1>
                            </Link>
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarCollapse">
                            <div class="navbar-nav ms-auto py-0">
                                <a><Link class="nav-item nav-link" to={"/"}>Admin Home</Link></a>
                                <a><Link class="nav-item nav-link" to={"/manageusers"}>Manage Users</Link></a>
                                <div class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Tasks</a>
                                    <div class="dropdown-menu m-0">
                                        <a><Link class="dropdown-item" to={"/addproject"}>Add Project</Link></a>
                                        <a><Link class="dropdown-item" to={"/assignproject"}>Assign Project</Link></a>
                                        <a><Link class="dropdown-item" to={"/creategroup"}>Create Group</Link></a>
                                    </div>
                                </div>
                                <a><Link class="nav-item nav-link" to={"/logout"}>Logout</Link></a>
                                <a href="tel:" class="nav-item nav-link nav-contact bg-secondary text-white px-5 ms-lg-5"><i class="bi bi-telephone-outbound me-2"></i>XXX XXX XXXX</a>
                            </div>
                        </div>
                    </nav>
                    {/* Navbar End */}        
                </>
            );
        }

        else if(localStorage.getItem('token')!=undefined && localStorage.getItem('role')=='user')
        {
            setNavContent(
                <>
                    {/* Navbar Start */}
                    <nav class="navbar navbar-expand-lg bg-white navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0">
                        <a class="navbar-brand ms-lg-5">
                            <Link to={"/"}>
                            <h1 class="display-5 m-0 text-primary">P <span class="text-secondary">M </span>S</h1>
                            </Link>
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarCollapse">
                            <div class="navbar-nav ms-auto py-0">
                                <a><Link class="nav-item nav-link" to={"/"}>User Home</Link></a>
                                <a><Link class="nav-item nav-link" to={"/viewprojects"}>View Projects</Link></a>
                                <a><Link class="nav-item nav-link" to={"/logout"}>Logout</Link></a>
                                <a href="tel:" class="nav-item nav-link nav-contact bg-secondary text-white px-5 ms-lg-5"><i class="bi bi-telephone-outbound me-2"></i>XXX XXX XXXX</a>
                            </div>
                        </div>
                    </nav>
                    {/* Navbar End */}        
                </>
            );
        }

        else
        {
            if(window.location.pathname == '/about')
        {
            setNavContent(
                <>
                    {/* Navbar Start */}
                    <nav class="navbar navbar-expand-lg bg-white navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0">
                        <a class="navbar-brand ms-lg-5">
                            <Link to={"/"}>
                            <h1 class="display-5 m-0 text-primary">P <span class="text-secondary">M </span>S</h1>
                            </Link>
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarCollapse">
                            <div class="navbar-nav ms-auto py-0">
                                <a><Link class="nav-item nav-link" to={"/"}>Home</Link></a>
                                <a><Link class="nav-item nav-link active" to={"/about"}>About</Link></a>
                                <a><Link class="nav-item nav-link" id="service" to={"/service"}>Service</Link></a>
                                <a><Link class="nav-item nav-link" id="contact" to={"/contact"}>Contact</Link></a>
                                <div class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Tasks</a>
                                    <div class="dropdown-menu m-0">
                                        <a><Link class="dropdown-item"></Link></a>
                                        
                                    </div>
                                </div>
                                <a><Link class="nav-item nav-link" id="register" to={"/register"}>Register</Link></a>
                                <a><Link class="nav-item nav-link" id="login" to={"/login"}>Login</Link></a>
                                <a href="tel:" class="nav-item nav-link nav-contact bg-secondary text-white px-5 ms-lg-5"><i class="bi bi-telephone-outbound me-2"></i>XXX XXX XXXX</a>
                            </div>
                        </div>
                    </nav>
                    {/* Navbar End */}        
                </>
            );
        }
        else if(window.location.pathname == '/contact')
        {
            setNavContent(
                <>
                    {/* Navbar Start */}
                    <nav class="navbar navbar-expand-lg bg-white navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0">
                        <a class="navbar-brand ms-lg-5">
                            <Link to={"/"}>
                            <h1 class="display-5 m-0 text-primary">P <span class="text-secondary">M </span>S</h1>
                            </Link>
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarCollapse">
                            <div class="navbar-nav ms-auto py-0">
                                <a><Link class="nav-item nav-link" to={"/"}>Home</Link></a>
                                <a><Link class="nav-item nav-link" to={"/about"}>About</Link></a>
                                <a><Link class="nav-item nav-link" id="service" to={"/service"}>Service</Link></a>
                                <a><Link class="nav-item nav-link active" id="contact" to={"/contact"}>Contact</Link></a>
                                <div class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Tasks</a>
                                    <div class="dropdown-menu m-0">
                                        <a><Link class="dropdown-item"></Link></a>
                                    </div>
                                </div>
                                <a><Link class="nav-item nav-link" id="register" to={"/register"}>Register</Link></a>
                                <a><Link class="nav-item nav-link" id="login" to={"/login"}>Login</Link></a>
                                <a href="tel:" class="nav-item nav-link nav-contact bg-secondary text-white px-5 ms-lg-5"><i class="bi bi-telephone-outbound me-2"></i>XXX XXX XXXX</a>
                            </div>
                        </div>
                    </nav>
                    {/* Navbar End */}        
                </>
            );
        }
        else if(window.location.pathname == '/service')
        {
            setNavContent(
                <>
                    {/* Navbar Start */}
                    <nav class="navbar navbar-expand-lg bg-white navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0">
                        <a class="navbar-brand ms-lg-5">
                            <Link to={"/"}>
                            <h1 class="display-5 m-0 text-primary">P <span class="text-secondary">M </span>S</h1>
                            </Link>
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarCollapse">
                            <div class="navbar-nav ms-auto py-0">
                                <a><Link class="nav-item nav-link" to={"/"}>Home</Link></a>
                                <a><Link class="nav-item nav-link" to={"/about"}>About</Link></a>
                                <a><Link class="nav-item nav-link active" id="service" to={"/service"}>Service</Link></a>
                                <a><Link class="nav-item nav-link" id="contact" to={"/contact"}>Contact</Link></a>
                                <div class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Tasks</a>
                                    <div class="dropdown-menu m-0">
                                        <a><Link class="dropdown-item"></Link></a>
                                    </div>
                                </div>
                                <a><Link class="nav-item nav-link" id="register" to={"/register"}>Register</Link></a>
                                <a><Link class="nav-item nav-link" id="login" to={"/login"}>Login</Link></a>
                                <a href="tel:" class="nav-item nav-link nav-contact bg-secondary text-white px-5 ms-lg-5"><i class="bi bi-telephone-outbound me-2"></i>XXX XXX XXXX</a>
                            </div>
                        </div>
                    </nav>
                    {/* Navbar End */}        
                </>
            );
        }
        else if(window.location.pathname == '/task' || window.location.pathname == '/addproject' || window.location.pathname == '/assignproject' || window.location.pathname == '/creategroup')
        {
            setNavContent(
                <>
                    {/* Navbar Start */}
                    <nav class="navbar navbar-expand-lg bg-white navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0">
                        <a class="navbar-brand ms-lg-5">
                            <Link to={"/"}>
                            <h1 class="display-5 m-0 text-primary">P <span class="text-secondary">M </span>S</h1>
                            </Link>
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarCollapse">
                            <div class="navbar-nav ms-auto py-0">
                                <a><Link class="nav-item nav-link" to={"/"}>Home</Link></a>
                                <a><Link class="nav-item nav-link" to={"/about"}>About</Link></a>
                                <a><Link class="nav-item nav-link" to={"/service"}>Service</Link></a>
                                <a><Link class="nav-item nav-link" to={"/contact"}>Contact</Link></a>
                                <div class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle active" data-bs-toggle="dropdown">Tasks</a>
                                    <div class="dropdown-menu m-0">
                                        <a><Link class="dropdown-item"></Link></a>
                                    </div>
                                </div>
                                <a><Link class="nav-item nav-link" to={"/register"}>Register</Link></a>
                                <a><Link class="nav-item nav-link" to={"/login"}>Login</Link></a>
                                <a href="tel:" class="nav-item nav-link nav-contact bg-secondary text-white px-5 ms-lg-5"><i class="bi bi-telephone-outbound me-2"></i>XXX XXX XXXX</a>
                            </div>
                        </div>
                    </nav>
                    {/* Navbar End */}        
                </>
            );
        }
        else if(window.location.pathname == '/register')
        {
            setNavContent(
                <>
                    {/* Navbar Start */}
                    <nav class="navbar navbar-expand-lg bg-white navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0">
                        <a class="navbar-brand ms-lg-5">
                            <Link to={"/"}>
                            <h1 class="display-5 m-0 text-primary">P <span class="text-secondary">M </span>S</h1>
                            </Link>
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarCollapse">
                            <div class="navbar-nav ms-auto py-0">
                                <a><Link class="nav-item nav-link" to={"/"}>Home</Link></a>
                                <a><Link class="nav-item nav-link" to={"/about"}>About</Link></a>
                                <a><Link class="nav-item nav-link" to={"/service"}>Service</Link></a>
                                <a><Link class="nav-item nav-link" to={"/contact"}>Contact</Link></a>
                                <div class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Tasks</a>
                                    <div class="dropdown-menu m-0">
                                        <a><Link class="dropdown-item"></Link></a>
                                    </div>
                                </div>
                                <a><Link class="nav-item nav-link active" to={"/register"}>Register</Link></a>
                                <a><Link class="nav-item nav-link" to={"/login"}>Login</Link></a>
                                <a href="tel:" class="nav-item nav-link nav-contact bg-secondary text-white px-5 ms-lg-5"><i class="bi bi-telephone-outbound me-2"></i>XXX XXX XXXX</a>
                            </div>
                        </div>
                    </nav>
                    {/* Navbar End */}        
                </>
            );
        }
        else if(window.location.pathname == '/login')
        {
            setNavContent(
                <>
                    {/* Navbar Start */}
                    <nav class="navbar navbar-expand-lg bg-white navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0">
                        <a class="navbar-brand ms-lg-5">
                            <Link to={"/"}>
                            <h1 class="display-5 m-0 text-primary">P <span class="text-secondary">M </span>S</h1>
                            </Link>
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarCollapse">
                            <div class="navbar-nav ms-auto py-0">
                                <a><Link class="nav-item nav-link" to={"/"}>Home</Link></a>
                                <a><Link class="nav-item nav-link" to={"/about"}>About</Link></a>
                                <a><Link class="nav-item nav-link" to={"/service"}>Service</Link></a>
                                <a><Link class="nav-item nav-link" to={"/contact"}>Contact</Link></a>
                                <div class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Tasks</a>
                                    <div class="dropdown-menu m-0">
                                        <a><Link class="dropdown-item"></Link></a>
                                    </div>
                                </div>
                                <a><Link class="nav-item nav-link" to={"/register"}>Register</Link></a>
                                <a><Link class="nav-item nav-link active" to={"/login"}>Login</Link></a>
                                <a href="tel:" class="nav-item nav-link nav-contact bg-secondary text-white px-5 ms-lg-5"><i class="bi bi-telephone-outbound me-2"></i>XXX XXX XXXX</a>
                            </div>
                        </div>
                    </nav>
                    {/* Navbar End */}        
                </>
            );
        }
        else
        {
            setNavContent(
                <>
                    {/* Navbar Start */}
                    <nav class="navbar navbar-expand-lg bg-white navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0">
                        <a class="navbar-brand ms-lg-5">
                            <Link to={"/"}>
                            <h1 class="display-5 m-0 text-primary">P <span class="text-secondary">M </span>S</h1>
                            </Link>
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarCollapse">
                            <div class="navbar-nav ms-auto py-0">
                                <a><Link class="nav-item nav-link active" to={"/"}>Home</Link></a>
                                <a><Link class="nav-item nav-link" to={"/about"}>About</Link></a>
                                <a><Link class="nav-item nav-link" to={"/service"}>Service</Link></a>
                                <a><Link class="nav-item nav-link" to={"/contact"}>Contact</Link></a>
                                <div class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Tasks</a>
                                    <div class="dropdown-menu m-0">
                                        <a><Link class="dropdown-item"></Link></a>
                                    </div>
                                </div>
                                <a><Link class="nav-item nav-link" to={"/register"}>Register</Link></a>
                                <a><Link class="nav-item nav-link" to={"/login"}>Login</Link></a>
                                <a href="tel:" class="nav-item nav-link nav-contact bg-secondary text-white px-5 ms-lg-5"><i class="bi bi-telephone-outbound me-2"></i>XXX XXX XXXX</a>
                            </div>
                        </div>
                    </nav>
                    {/* Navbar End */}        
                </>
            );
        }
        }
    });
    

    return(
        <>
        {navContent}
        </>
    );
}

export default Navbar;