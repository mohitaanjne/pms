import '../models/connection.js';
import GroupSchemaModel from '../models/group.model.js';
import url from 'url';

export const save = async(req,res,next)=>{
    //sort group list in descending order by _id and computing id
    var groupList = await GroupSchemaModel.find().sort({"_id":-1});
    var _id = groupList.length==0?1:groupList[0]._id+1;

    var groupDetails = {...req.body, "_id":_id};
    var p = await GroupSchemaModel.create(groupDetails);
    if(p.length !=0)
     return res.status(201).json({"status":"success"});
    else
    return res.status(500).json({"status":"failed"});
};

export const fetch = async(req,res,next)=>{
    var condition_obj=url.parse(req.url,true).query;
    var groupList=await GroupSchemaModel.find(condition_obj);
    if(groupList.length !=0)
     return res.status(201).json({"group list":groupList});
    else
     return res.status(500).json({error:"data not fetched"});
};

export const deleteGroup = async(req,res,next)=>{
    var condition_obj=JSON.parse(req.body.condition_obj);
    var groupList=await GroupSchemaModel.find(condition_obj);
    if(groupList.length!=0)
    {
        var group=await GroupSchemaModel.deleteMany(condition_obj);
        if(group)
         return res.status(201).json({"msg":"record successfully deleted"});
        else
         return res.status(500).json({error:"error"});
    }
    else
     return res.status(500).json({error:"resourse not found"});
};

export const updateGroup = async(req,res,next)=>{
    var groupDetails = await GroupSchemaModel.find(JSON.parse(req.body.condition_obj));
    if(groupDetails.length!=0)
    {
        var group = await GroupSchemaModel.updateMany(JSON.parse(req.body.condition_obj),{$set:JSON.parse(req.body.content_obj)});
        if(group)
         return res.status(201).json({"msg":"record successfully updated"});
        else
         return res.status(500).json({error:"error"});
    }
    else
     return res.status(500).json({error:"resourse not found"});
};