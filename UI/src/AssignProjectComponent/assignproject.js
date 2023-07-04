import { useState } from "react";
import "./assignproject.css";

function AssignProject(){
    
    const[ptitle, setPtitle] = useState();
    const[group, setGroup] = useState();
    const[description, setDescription] = useState();
    const[startDate, setStartDate] = useState();
    const[endDate, setEndDate] = useState();
    
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
                                <h1 class="display-5 mb-0"><span className="text-danger">Assign </span>Project</h1>
                            </div>
                            <form>
                                <div class="form-group col-6">
                                    <label for="ptitle">Project Title:</label>
                                    <input type="text" name="ptitle" value={ptitle} onChange={e=>setPtitle(e.target.value)} class="form-control"/>
                                </div>
                                <br/>
                                <div class="form-group col-6">
                                    <label for="group">Group:</label>
                                    <input type="text" name="group" value={group} onChange={e=>setGroup(e.target.value)} class="form-control"/>
                                </div>
                                <br/>
                                <div class="form-group col-6">
                                    <label for="description">Description:</label>
                                    <textarea class="form-control" name="description" value={description} onChange={e=>setDescription(e.target.value)}></textarea>
                                </div>
                                <br/>
                                <div class="form-group col-6">
                                    <label for="startDate">Start Date:</label>
                                    <input type="text" placeholder="dd/mm/yyyy" name="startDate" value={startDate} onChange={e=>setStartDate(e.target.value)} class="form-control"/>
                                </div>
                                <br/>
                                <div class="form-group col-6">
                                    <label for="endDate">End Date:</label>
                                    <input type="text" placeholder="dd/mm/yyyy" name="endDate" value={endDate} onChange={e=>setEndDate(e.target.value)} class="form-control"/>
                                </div>
                                <br/>
                                <button type="button" class="btn btn-success" onClick={submitHandler}>Add</button>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
            {/* About End */}
        </>
    );
}

export default AssignProject;