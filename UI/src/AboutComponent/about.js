import { useEffect, useState } from "react";
import axios from "axios";
import "./about.css";

function About(){

    const [postsDetails, setPostsDetails] = useState([]);

    useEffect(()=>{
        const api_url = "https://jsonplaceholder.typicode.com/posts";
        axios.get(api_url)
        .then((response)=>{
            setPostsDetails(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    });
    return(
        <>
            {/* About Start */}
            <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div class="container">
                    <div class="row gx-5">
                        <div class="col-lg-12">
                            <div class="mb-4">
                                <h5 class="text-primary text-uppercase" style={{"letterSpacing": "5px"}}>About Us</h5>
                                <h1 class="display-5 mb-0">Welcome To Project Management System, About Page</h1>
                            </div>
                            <h2 class="text-body fst-italic mb-4">Post Details</h2>
                            <table class="table table-bordered" border={"1"} cellPadding={"10px"}>
                                <tr align="center">
                                    <th>UserId</th>
                                    <th>Id</th>
                                    <th>Title</th>
                                    <th>Body</th>
                                </tr>
                                
                                {
                                    postsDetails.map((k)=>(
                                        <tr>
                                            <td>{k.userId}</td>
                                            <td>{k.id}</td>
                                            <td>{k.title}</td>
                                            <td>{k.body}</td>
                                        </tr>
                                    ))
                                }                                    
                                
                            </table>
                            
                        </div>
                    </div>
                </div>
            </div>
            {/* About End */}
        </>
    );
}

export default About;