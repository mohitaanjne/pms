import "./register.css";
import { useState } from "react";
import axios from "axios";
import {apiUrlUser} from '../apiUrls';

function Register(){
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [mobile, setMobile] = useState();
    const [address, setAddress] = useState();
    const [city, setCity] = useState();
    const [gender, setGender] = useState();
    const[output, setOutput] = useState()
    
    const handleSubmit =()=>{
        const userDetails = {"name":name, "email":email, "password":password, "mobile":mobile, "address":address, "city":city, "gender":gender};
        axios.post(apiUrlUser+"save",userDetails)
        .then((response)=>{
            // console.log(response.data);
            setOutput("Successfully Registered...");
            setName("");
            setEmail("");
            setPassword("");
            setMobile("");
            setAddress("");
            setCity("");
        })
        .catch((error)=>{
            console.log(error);
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
                                <h1 class="display-5 mb-0"><span className="text-danger">Register </span>Page</h1>
                            </div>
                            <font color="blue">{output}</font>
                            <form class="row g-3">
                                <div class="col-md-6">
                                    <label for="inputName" class="form-label">Name</label>
                                    <input type="text" class="form-control" name="name" value={name} onChange={e=>setName(e.target.value)}/>
                                </div>
                                <div class="col-md-6">
                                    <label for="inputEmail4" class="form-label">Email</label>
                                    <input type="email" class="form-control" name="email" value={email} onChange={e=>setEmail(e.target.value)}/>
                                </div>
                                <div class="col-md-6">
                                    <label for="inputPassword4" class="form-label">Password</label>
                                    <input type="password" class="form-control" name="password" value={password} onChange={e=>setPassword(e.target.value)}/>
                                </div>
                                <div class="col-md-6">
                                    <label for="inputMobile" class="form-label">Mobile</label>
                                    <input type="tel" class="form-control" name="mobile" value={mobile} onChange={e=>setMobile(e.target.value)}/>
                                </div>
                                <div class="col-12">
                                    <label for="inputAddress" class="form-label">Address</label>
                                    <input type="text" class="form-control" name="address" value={address} onChange={e=>setAddress(e.target.value)}/>
                                </div>
                                <div class="col-md-6">
                                    <label for="inputCity" class="form-label">City</label>
                                    <select class="form-control" name="city" value={city} onChange={e=>setCity(e.target.value)}>
                                        <option>Select City</option>
                                        <option value={"indore"}>Indore</option>
                                        <option value={"ujjain"}>Ujjain</option>
                                        <option value={"bhopal"}>Bhopal</option>
                                        <option value={"dewas"}>Dewas</option>
                                    </select>
                                </div>
                                <div className="col-12">
                                    <label class="form-check-label" for="inputGender">
                                        Gender
                                    </label>
                                    <div class="form-check">
                                        <input class="form-check-input" value={"male"} type="radio" name="gender" onChange={e=>setGender(e.target.value)} id="flexRadioDefault1"/>
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            Male
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" value={"female"} type="radio" name="gender" onChange={e=>setGender(e.target.value)} id="flexRadioDefault2"/>
                                        <label class="form-check-label" for="flexRadioDefault2">
                                            Female
                                        </label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button type="button" class="btn btn-primary" onClick={handleSubmit}>Register</button>
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

export default Register;