import '../models/connection.js';
import AssignProjectSchemaModel from '../models/assignproject.model.js';
import url from 'url';

export const save = async(req,res,next)=>{
    //sort assignproject list in descending order by _assignid and computing id
    var assignProjectList = await AssignProjectSchemaModel.find().sort({"_id":-1});
    var _id = assignProjectList.length==0?1:assignProjectList[0]._id+1;

    var assignProjectDetails = {...req.body, "_id":_id, "info":Date()};
    var p = await AssignProjectSchemaModel.create(assignProjectDetails);
    if(p.length !=0)
     return res.status(201).json({"status":"success"});
    else
    return res.status(500).json({"status":"failed"});
};

export const fetch = async(req,res,next)=>{
    var condition_obj=url.parse(req.url,true).query;
    // var condition_obj=req.query;
    console.log(condition_obj);
    var assignProjectList=await AssignProjectSchemaModel.find(condition_obj);
    if(assignProjectList.length !=0)
     return res.status(201).json({"assign project list":assignProjectList});
    else
     return res.status(500).json({error:"data not fetched"});
};

export const deleteAssignProject = async(req,res,next)=>{
    var condition_obj=JSON.parse(req.body.condition_obj);
    var assignProjectList=await AssignProjectSchemaModel.find(condition_obj);
    if(assignProjectList.length!=0)
    {
        var assignproject=await AssignProjectSchemaModel.deleteMany(condition_obj);
        if(assignproject)
         return res.status(201).json({"msg":"record successfully deleted"});
        else
         return res.status(500).json({error:"error"});
    }
    else
     return res.status(500).json({error:"resourse not found"});
};

export const updateAssignProject = async(req,res,next)=>{
    var condition_obj = JSON.parse(req.body.condition_obj);
    var content_obj = JSON.parse(req.body.content_obj);
    var assignProjectDetails = await AssignProjectSchemaModel.find(condition_obj);
    if(assignProjectDetails.length!=0)
    {
        var assignproject = await AssignProjectSchemaModel.updateMany(condition_obj,{$set:content_obj
        });
        if(assignproject)
         return res.status(201).json({"msg":"record successfully updated"});
        else
         return res.status(500).json({error:"error"});
    }
    else
     return res.status(500).json({error:"resourse not found"});
};