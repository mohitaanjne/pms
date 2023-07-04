import '../models/connection.js';
import ProjectSchemaModel from '../models/project.model.js';
import url from 'url';

export const save = async(req,res,next)=>{
    //sort project list in descending order by _id and computing id
    var projectList = await ProjectSchemaModel.find().sort({"_id":-1});
    var _id = projectList.length==0?1:projectList[0]._id+1;

    var projectDetails = {...req.body, "_id":_id};
    var p = await ProjectSchemaModel.create(projectDetails);
    if(p.length !=0)
     res.status(201).json({"status":"success"});
    else
    res.status(500).json({"status":"failed"});
};

export const fetch = async(req,res,next)=>{
    var condition_obj=url.parse(req.url,true).query;
    var projectList=await ProjectSchemaModel.find(condition_obj);
    if(projectList.length !=0)
     res.status(201).json(projectList);
    else
     res.status(500).json({error:"data not fetched"});
};

export const deleteProject = async(req,res,next)=>{
    var condition_obj=req.body;
    var projectList=await ProjectSchemaModel.find(condition_obj);
    if(projectList.length!=0)
    {
        var project=await ProjectSchemaModel.deleteMany(condition_obj);
        if(project)
         res.status(201).json({"msg":"record successfully deleted"});
        else
         res.status(500).json({error:"error"});
    }
    else
     res.status(500).json({error:"resourse not found"});
};

export const updateProject = async(req,res,next)=>{
    var projectDetails = await ProjectSchemaModel.find((req.body.condition_obj));
    if(projectDetails.length!=0)
    {
        var project = await ProjectSchemaModel.updateMany(req.body.condition_obj,{$set:req.body.content_obj});
        if(project)
         res.status(201).json({"msg":"record successfully updated"});
        else
         res.status(500).json({error:"error"});
    }
    else
     res.status(500).json({error:"resourse not found"});
};