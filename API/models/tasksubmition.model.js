import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const TaskSubmitionSchema = mongoose.Schema({
    "_id":Number,
    "submitiontitle":{
        "type":String,
        "required":[true, "Task title is required"],
        "lowercase":true,
        "trim":true
    },
    "gname":{
        "type":String,
        "required":[true, "Group name is required"],
        "lowercase":true,
        "trim":true
    },
    "description":{
        "type":String,
        "required":[true, "Description is required"],
        "lowercase":true,
        "trim":true
    },
    "filename":{
        "type":String,
        "required":[true, "Filename is required"],
        "lowercase":true
    },
    "info":String
});

//Apply uniqueValidator plugin to assigntask schema
TaskSubmitionSchema.plugin(uniqueValidator);

//Compile model to schema
const TaskSubmitionSchemaModel = mongoose.model('task_submition_collection',TaskSubmitionSchema);

export default TaskSubmitionSchemaModel;