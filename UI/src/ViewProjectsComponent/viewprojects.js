import { useEffect, useState } from "react";
import "./viewprojects.css";
import { apiUrlProject } from "../apiUrls";
import axios from "axios";

function ViewProjects(){

    const [projectList, setProjectList] = useState([]);
    useEffect(()=>{
        axios.get(apiUrlProject+"fetch").then((response)=>{
            setProjectList(response.data);
        }).catch((error)=>{
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
                                <h1 class="display-5 mb-0">Projects</h1>
                                <table class="table" cellPadding={"10px"}>
                                    <tr>
                                        <th>#</th>
                                        <th>Project Title</th>
                                        <th>Project Stream</th>
                                        <th>Project Description</th>
                                    </tr>
                                    {
                                        projectList.map((row)=>(
                                            <tr>
                                                <td>{row._id}</td>
                                                <td>{row.ptitle}</td>
                                                <td>{row.pstream}</td>
                                                <td>{row.pdescription}</td>
                                            </tr>
                                        ))
                                    }
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* About End */}
        </>
    );
}

export default ViewProjects;