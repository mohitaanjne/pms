import '../models/connection.js';
import TaskSubmitionSchemaModel from '../models/tasksubmition.model.js';
import url from 'url';

export const save = async(req,res,next)=>{
    //computing dynamic _id
    var submissionList = await TaskSubmitionSchemaModel.find().sort({"_id":-1});
    var _id = submissionList==0?1:submissionList[0]._id+1;
    var submitionDetails = {...req.body,"_id":_id,"info":Date()};
    var submition = await TaskSubmitionSchemaModel.create(submitionDetails);
    if(submition.length!=0)
     return res.status(201).json({"status":"success"});
    else
     return res.status(500).json({error:"failed"});
};

export const fetch = async(req,res,next)=>{
    var condition_obj = url.parse(req.url,true).query;
    var submissionList = await TaskSubmitionSchemaModel.find(condition_obj);
    if (submissionList.length!=0)
        return res.status(201).json({"task submition list":submissionList});
    else 
     return res.status(500).json({error:"server error"});
};

export const deleteSubmition = async(req,res,next)=>{
    var condition_obj = JSON.parse(req.body.condition_obj);
    var submissionList = await TaskSubmitionSchemaModel.find(condition_obj);
    if(submissionList.length!=0)
    {
        var result = await TaskSubmitionSchemaModel.deleteMany(condition_obj);
        if(result)
         return res.status(201).json({"result":"record deleted successfully"});
        else 
         return res.status(500).json({error:"server error"});
    }
    else
     return res.status(404).json({error:"req resource not found"});
};

export const updateSubmition = async (req,res,next)=>{
    var submissionList = await TaskSubmitionSchemaModel.find(JSON.parse(req.body.condition_obj));
    if(submissionList.length!=0)
    {
        var submition = await TaskSubmitionSchemaModel.updateOne(JSON.parse(req.body.condition_obj),{$set:JSON.parse(req.body.content_obj)})
        if(submition)
         return res.status(201).json({"msg":"record updated successfully"});
        else
         return res.status(500).json({error:"server error"});
    }
    else
    return res.status(404).json({error:"req resource not found"});
};