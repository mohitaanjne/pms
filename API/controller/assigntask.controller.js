import '../models/connection.js';
import AssignTaskSchemaModel from '../models/assigntask.model.js';
import url from 'url';

export const save = async(req,res,next)=>{
    //computing dynamic _id
    var assigntaskList = await AssignTaskSchemaModel.find().sort({"_id":-1});
    var _id = assigntaskList==0?1:assigntaskList[0]._id+1;
    var assigntaskDetails = {...req.body,"_id":_id};
    var assigntask = await AssignTaskSchemaModel.create(assigntaskDetails);
    if(assigntask.length!=0)
     return res.status(201).json({"status":"success"});
    else
     return res.status(500).json({error:"failed"});
};

export const fetch = async(req,res,next)=>{
    var condition_obj = url.parse(req.url,true).query;
    var assigntaskList = await AssignTaskSchemaModel.find(condition_obj);
    if (assigntaskList.length!=0)
        return res.status(201).json({"assign task":assigntaskList});
    else 
     return res.status(500).json({error:"server error"});
};

export const deleteAssigntask = async(req,res,next)=>{
    var condition_obj = JSON.parse(req.body.condition_obj);
    var assigntaskList = await AssignTaskSchemaModel.find(condition_obj);
    if(assigntaskList.length!=0)
    {
        var result = await AssignTaskSchemaModel.deleteMany(condition_obj);
        if(result)
         return res.status(201).json({"result":"record deleted successfully"});
        else 
         return res.status(500).json({error:"server error"});
    }
    else
     return res.status(404).json({error:"req resource not found"});
};

export const updateAssigntask = async (req,res,next)=>{
    var assigntaskList = await AssignTaskSchemaModel.find(JSON.parse(req.body.condition_obj));
    if(assigntaskList.length!=0)
    {
        var assigntask = await AssignTaskSchemaModel.updateOne(JSON.parse(req.body.condition_obj),{$set:JSON.parse(req.body.content_obj)})
        if(assigntask)
         return res.status(201).json({"msg":"record updated successfully"});
        else
         return res.status(500).json({error:"server error"});
    }
    else
    return res.status(404).json({error:"req resource not found"});
};