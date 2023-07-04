import { useEffect, useState } from "react";
import "./addproject.css";
import axios from "axios";
import { apiUrlProject } from "../apiUrls";

function AddProject(){
    
    const[ptitle, setPtitle] = useState();
    const[pstream, setPstream] = useState();
    const[pdescription, setPdescription] = useState();

    const[output, setOutput] = useState();

    const [projectList, setProjectList] = useState([]);
    
    const submitHandler =()=>{
        const projectDetails = {"ptitle":ptitle, "pstream":pstream, "pdescription":pdescription};
        axios.post(apiUrlProject+"save",projectDetails).then((response)=>{
            setPtitle("");
            setPstream("");
            setPdescription("");
            setOutput("Project added successfully..");
        }).catch((error)=>{
            console.log(error);
            setOutput("Project already exist !!");
        });
        
    }

    const viewProjects=()=>{
        axios.get(apiUrlProject + "fetch").then((response)=>{
            setProjectList(response.data);
        }).catch((error)=>{
            console.log(error);
        });
    }

    const manageProject=(_id,e)=>{
        if (e=="edit"){
            const updateDetails = {"condition_obj":{"_id":_id},"content_obj":{"ptitle":ptitle, "pstream":pstream, "pdescription":pdescription}};
            axios.patch(apiUrlProject+"update",updateDetails).then((response)=>{
                viewProjects();
                setPtitle("");
                setPstream("");
                setPdescription("");
            }).catch((error)=>{
                console.log(error);
            })
        } 
        else {
            let deleteDetails = {"data":{"_id":_id}};
            axios.delete(apiUrlProject+"delete", deleteDetails).then((response)=>{
                viewProjects();
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
                                <h1 class="display-5 mb-0"><span className="text-danger">Add </span>Project</h1>
                            </div>
                            <font color="red">{output}</font>
                            <form>
                                <div class="form-group col-6">
                                    <label for="ptitle">Project Title:</label>
                                    <input type="text" name="ptitle" value={ptitle} onChange={e=>setPtitle(e.target.value)} class="form-control"/>
                                </div>
                                <br/>
                                <div class="form-group col-6">
                                    <label for="pstream">Stream:</label>
                                    <select type="text" name="pstream" value={pstream} onChange={e=>setPstream(e.target.value)} class="form-control">
                                        <option>Select Stream</option>
                                        <option>Mern Stack</option>
                                        <option>Mean Stack</option>
                                        <option>Python</option>
                                        <option>Java</option>
                                    </select>
                                </div>
                                <br/>
                                <div class="form-group col-6">
                                    <label for="pdescription">Project Description:</label>
                                    <textarea class="form-control" name="pdescription" value={pdescription} onChange={e=>setPdescription(e.target.value)}></textarea>
                                </div>
                                <br/>
                                <button type="button" class="btn btn-success" onClick={submitHandler}>Add</button>
                                <button type="button" class="btn btn-primary ms-3" onClick={viewProjects}>View All Projects</button>
                            </form>
                            
                            <table className="table mt-5"> 
                                <tr>
                                    <th>Project Title</th>
                                    <th>Project Stream</th>
                                    <th>Project Description</th>
                                    <th>Action</th>
                                    <th>Update</th>
                                </tr>
                            {    
                                projectList.map((row)=>(
                                    
                                    <tr>
                                        <td>{row.ptitle}</td>
                                        <td>{row.pstream}</td>
                                        <td>{row.pdescription}</td>
                                        <td>
                                            <a data-bs-toggle="collapse" href="#multiCollapse" role="button" aria-expanded="false" aria-controls="multiCollapse"><img src="./assets/img/edit.png" width={"30px"} height={"30px"}/></a>
                                            <a onClick={()=>{manageProject(row._id,"delete")}}><img src="./assets/img/delete1.png" width={"40px"} height={"40px"} /></a>
                                        </td>
                                        <td>
                                            <div class="collapse" id="multiCollapse">
                                                <div class="card card-body float-end">
                                                    <form>
                                                        <div class="form-group col-6">
                                                            <label for="ptitle">Project Title:</label>
                                                            <input type="text" name="ptitle" value={ptitle} onChange={e=>setPtitle(e.target.value)} class="form-control"/>
                                                        </div>
                                                        <br/>
                                                        <div class="form-group col-6">
                                                            <label for="pstream">Stream:</label>
                                                            <select type="text" name="pstream" value={pstream} onChange={e=>setPstream(e.target.value)} class="form-control">
                                                                <option>Select Stream</option>
                                                                <option>Mern Stack</option>
                                                                <option>Mean Stack</option>
                                                                <option>Python</option>
                                                                <option>Java</option>
                                                            </select>
                                                        </div>
                                                        <br/>
                                                        <div class="form-group col-6">
                                                            <label for="pdescription">Project Description:</label>
                                                            <textarea class="form-control" name="pdescription" value={pdescription} onChange={e=>setPdescription(e.target.value)}></textarea>
                                                        </div>
                                                        <br/>
                                                        <button type="button" class="btn btn-success"  onClick={()=>{manageProject(row._id,"edit")}}>Update</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </td>
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

export default AddProject;  