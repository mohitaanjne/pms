import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const AssignTaskSchema = mongoose.Schema({
    "_id":Number,
    "tasktitle":{
        "type":String,
        "required":[true, "Task title is required"],
        "unique":true,
        "lowercase":true,
        "trim":true
    },
    "taskdescription":{
        "type":String,
        "required":[true, "Task description is required"],
        "lowercase":true,
        "trim":true
    }
});

//Apply uniqueValidator plugin to assigntask schema
AssignTaskSchema.plugin(uniqueValidator);

//Compile model to schema
const AssignTaskSchemaModel = mongoose.model('assign_task_collection',AssignTaskSchema);

export default AssignTaskSchemaModel;