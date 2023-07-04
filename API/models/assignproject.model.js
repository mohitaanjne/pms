import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const AssignProjectSchema = mongoose.Schema({
    "_id":Number,
    "ptitle":{
        "type":String,
        "required":[true, "Project title is required"],
        "lowercase":true,
        "unique":true,
        "trim":true
    },
    "group":{
        "type":String,
        "required":[true, "Group is required"],
        // "unique":true,
        "lowercase":true,
        "trim":true
    },
    "description":{
        "type":String,
        "required":[true, "Description is required"],
        "lowercase":true,
        "trim":true
    },
    "startdate":{
        "type":String,
        "required":[true, "Start Date is required"],
        "trim":true
    },
    "enddate":{
        "type":String,
        "required":[true, "End Date is required"],
        "trim":true
    },
    "info":String
});

//Apply uniqueValidator plugin to userSchema
AssignProjectSchema.plugin(uniqueValidator);

//compile model to schema
const AssignProjectSchemaModel = mongoose.model('assign_project_collection',AssignProjectSchema);

export default AssignProjectSchemaModel;