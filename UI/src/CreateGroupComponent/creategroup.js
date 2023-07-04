import { useState } from "react";
import "./creategroup.css";

function CreateGroup(){
    
    const[group, setGroup] = useState();
    
    const submitHandler =()=>{
        
    }

    return(
        <>
            {/* About Start */}
            <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div class="container">
                    <div class="row gx-5">
                        <div class="col-lg-12">
                            <div class="mb-4">
                                <h1 class="display-5 mb-0"><span className="text-danger">Create </span>Group</h1>
                            </div>
                            <form>
                                <div class="form-group col-6">
                                    <label for="group">Group Name:</label>
                                    <input type="text" name="group" value={group} onChange={e=>setGroup(e.target.value)} class="form-control"/>
                                </div>
                                <br/>
                                <button type="button" class="btn btn-success" onClick={submitHandler}>Add Group</button>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
            {/* About End */}
        </>
    );
}

export default CreateGroup;