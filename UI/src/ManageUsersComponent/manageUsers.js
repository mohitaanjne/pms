import { useEffect, useState } from "react";
import axios from "axios";
import "./manageUsers.css";
import { apiUrlUser } from "../apiUrls";
import { useNavigate } from "react-router-dom";
function ManageUsers(){

    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState([]);
    console.log(userDetails);
    useEffect(()=>{
        axios.get(apiUrlUser+"fetch?role=user")
        .then((response)=>{
            setUserDetails(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    });
    
    const manageUserAction=(_id,s)=>{
        if(s=="block")
        {
            let updateDetails = {"condition_obj":{"_id":_id}, "content_obj":{"status":0}};
            axios.patch(apiUrlUser+"update",updateDetails).then((response)=>{
                navigate("/manageUsers");
            });
        }
        else if(s=="verify")
        {
            let updateDetails = {"condition_obj":{"_id":_id}, "content_obj":{"status":1}}
            axios.patch(apiUrlUser+"update",updateDetails).then((response)=>{
                navigate("/manageUsers");
            });
        }
        else
        {
            let removeDetails = {"data":{"_id":_id}}
            axios.delete(apiUrlUser+"delete",removeDetails).then((response)=>{
            navigate("/manageUsers");
            });
        }
    }   
    return(
        <>
            {/* About Start */}
            <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div class="container">
                    <div class="row gx-5">
                        <div class="col-lg-12">
                            <div class="mb-4">
                                <h1 class="display-5 mb-0">View and Manage Users !!</h1>
                            </div>
                            <div id="table">
                                <table cellPadding={"15px"}>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Mobile</th>
                                        <th>Address</th>
                                        <th>City</th>
                                        <th>Gender</th>
                                        <th>Info</th>
                                        <th>Action</th>
                                    </tr>
                                    {
                                        userDetails.map((row)=>(
                                            <tr>
                                                <td>{row._id}</td>
                                                <td>{row.name}</td>
                                                <td>{row.email}</td>
                                                <td>{row.mobile}</td>
                                                <td>{row.address}</td>
                                                <td>{row.city}</td>
                                                <td>{row.gender}</td>
                                                <td>{row.info}</td>

                                                {row.status==1 && <a onClick={()=>{manageUserAction(row._id,"block")}}><img src="./assets/img/wrong-icon.png" width={"35px"} height={"35px"}/></a>}
                                                {row.status==0 && <a onClick={()=>{manageUserAction(row._id, "verify")}}><img src="./assets/img/right-icon.png" style={{"marginLeft":"5px"}} width={"30px"} height={"30px"}/></a>}
                                                &nbsp;&nbsp;
                                                <a onClick={()=>{manageUserAction(row._id, "delete")}}><img src="./assets/img/delete-icon.png" width={"25px"} height={"25px"} /></a>
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

export default ManageUsers;