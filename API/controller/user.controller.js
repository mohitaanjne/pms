import "../models/connection.js";
import UserSchemaModel from '../models/user.model.js';
import url from 'url';
import rs from 'randomstring';
import jwt from "jsonwebtoken";
import { sendMail } from "./email.controller.js";

export const save = async (req,res,next)=>{
    //computing id 
    var userList = await UserSchemaModel.find().sort({"_id":-1});
    var _id = userList.length==0?1:userList[0]._id+1;
    var userDetails = {...req.body, "_id":_id, "role":"user","status":0, "info":Date()};
    var user = await UserSchemaModel.create(userDetails);
    if(user)
    {
        sendMail(user.email,user.password);
        res.status(201).json({"status":true});
    }
     else
     res.status(201).json({"status":false});
};

export const fetch = async (req,res,next)=>{
    var condition_object = url.parse(req.url,true).query;
    var userList = await UserSchemaModel.find(condition_object);
    if(userList.length !=0)
     res.status(201).json(userList);
    else
     res.status(500).json({"status":"record not found"});
};

export const deleteUser = async(req,res,next)=>{
    var condition_object = req.body;
    var user = await UserSchemaModel.find(condition_object);
    if(user.length !=0)
    {
        let result = await UserSchemaModel.deleteMany(condition_object);
        if (result)
         res.status(201).json({"result":"record deleted successfully"});
        else
         res.status(500).json({error:"error"});
    }
    else
     res.status(404).json({error:"resource not found"});
};

export const updateUser = async (req,res,next)=>{
    var userList = await UserSchemaModel.findOne(req.body.condition_obj);
    if(userList.length !=0)
    {
        var user = await UserSchemaModel.updateOne(req.body.condition_obj,{$set : req.body.content_obj});
        if(user)
         res.status(201).json({"msg":"record successfully updated"});
        else
         res.status(201).json({error:"error"});
    }
    else{
        res.status(201);
    }
};

export const login = async(req,res,next)=>{
    var userDetails = req.body;
    userDetails = {...userDetails, "status":1};
    var userList = await UserSchemaModel.find(userDetails);
    if(userList.length !=0)
    {
        var payload = {"subject":userList[0].email};
        var key = rs.generate();
        var token = jwt.sign(payload,key);
        res.status(201).json({"token":token, "userList":userList});
    }
    else{
        res.status(500).json({error:"token error"});
    }
};