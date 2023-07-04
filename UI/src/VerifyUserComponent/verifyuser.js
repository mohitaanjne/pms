import { useEffect, useState } from 'react';
import './verifyuser.css';
import axios from 'axios';
import { apiUrlUser } from '../apiUrls';
import { Navigate, useParams } from 'react-router-dom';


function VerifyAccount(){
    const params = useParams();
    const [output, setOutput] = useState();

    useEffect(()=>{
        axios.get(apiUrlUser+"fetch?email="+params.email).then((response)=>{
            if(response.data[0].__v==0)
            {
                const updateDetails = {"condition_obj":{"email":params.email}, "content_obj":{"status":1, "__v":1}};
                axios.patch(apiUrlUser+"update", updateDetails).then((response)=>{
                    
                    setOutput("<h1>Your Account Successfully Verifed..</h1>")
                })
            }
            // else{
            //      setOutput("<h1>Your account is already verifed..</h1>");
            // }
        });
    })
    

    return(
        <>
        {output}
        <Navigate to="/login"/>
        </>

    );
}

export default VerifyAccount;