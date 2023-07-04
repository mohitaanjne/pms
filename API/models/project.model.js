import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const ProjectSchema = mongoose.Schema({
    "_id":Number,
    "ptitle":{
        "type":String,
        "required":[true, "Project Title is required"],
        "lowercase":true,
        "trim":true,
        "unique":true
    },
    "pstream":{
        "type":String,
        "required":[true, "Project Stream is required"],
        "lowercase":true,
        "trim":true
    },
    "pdescription":{
        "type":String,
        "required":[true, "Project Description is required"],
        "lowercase":true,
        "trim":true
    },
});

//Apply uniqueValidator plugin to project schema
ProjectSchema.plugin(uniqueValidator);

//compile model to schema
const ProjectSchemaModel = mongoose.model('project_collection', ProjectSchema);

export default ProjectSchemaModel;