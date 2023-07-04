import "./login.css";
import { useState } from "react";
import axios from "axios";
import {apiUrlUser} from '../apiUrls';
import {useNavigate} from 'react-router-dom';

function Login(){
    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const[output, setOutput] = useState()
    
    const handleSubmit =()=>{
        const userDetails = {"email":email, "password":password};
        axios.post(apiUrlUser+"login",userDetails)
        .then((response)=>{
            setOutput("Successfully Logged In....");
            var obj = response.data.userList[0];
            localStorage.setItem("token",response.data.token);
            localStorage.setItem("_id",obj._id);
            localStorage.setItem("name",obj.name);
            localStorage.setItem("email",obj.email);
            localStorage.setItem("mobile",obj.mobile);
            localStorage.setItem("address",obj.address);
            localStorage.setItem("city",obj.city);
            localStorage.setItem("gender",obj.gender);
            localStorage.setItem("info",obj.info);
            localStorage.setItem("role",obj.role);
            
            obj.role=="admin"?navigate("/admin"):navigate("/user");
        })
        .catch((error)=>{
            setOutput("Invalid user or please verify your account");
            setEmail("");
            setPassword("");
        });
    }
    return(
        <>
            {/* About Start */}
            <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div class="container">
                    <div class="row gx-5">
                        <div class="col-lg-12">
                            <div class="mb-4">
                                <h1 class="display-5 mb-0"><span className="text-danger">Login </span>Page</h1>
                            </div>
                            <font color="red">{output}</font>
                            <form>
                                <div class="form-group col-md-6">
                                    <label for="inputEmail4" class="form-label">Email</label>
                                    <input type="email" class="form-control" name="email" value={email} onChange={e=>setEmail(e.target.value)}/>
                                </div>
                                <br/>
                                <div class="form-group col-md-6">
                                    <label for="inputPassword4" class="form-label">Password</label>
                                    <input type="password" class="form-control" name="password" value={password} onChange={e=>setPassword(e.target.value)}/>
                                </div>
                                <br/>
                                <div class="col-12">
                                    <button type="button" class="btn btn-primary" onClick={handleSubmit}>Login</button>
                                </div>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
            {/* About End */}
        </>
    );
}

export default Login;